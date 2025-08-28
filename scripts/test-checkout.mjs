#!/usr/bin/env node
/**
 * scripts/test-checkout.mjs
 *
 * Usage (dry run):
 *   node ./scripts/test-checkout.mjs --dry
 *
 * Full usage (requires env vars):
 * FIREBASE_SERVICE_ACCOUNT_KEY='{"type":...}' NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key BASE_URL=http://localhost:3000 node ./scripts/test-checkout.mjs
 */

import admin from 'firebase-admin';

const SERVICE_ACCOUNT =
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY ||
  process.env.GOOGLE_APPLICATION_CREDENTIALS;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const DRY = process.argv.includes('--dry') || process.argv.includes('-d');

function fatal(msg) {
  console.error(msg);
  process.exit(1);
}

async function main() {
  if (DRY) {
    console.log('DRY RUN — planned steps:');
    console.log(
      '- Initialize firebase-admin with service account (FIREBASE_SERVICE_ACCOUNT_KEY or GOOGLE_APPLICATION_CREDENTIALS)'
    );
    console.log('- Create custom token for test UID');
    console.log(
      '- Exchange custom token for ID token via Identity Toolkit REST API using NEXT_PUBLIC_FIREBASE_API_KEY'
    );
    console.log(
      "- POST to /api/checkout with Authorization: Bearer <ID_TOKEN> and sample body: { items: [{ name: 'Test product', price: 100, quantity: 1 }] }"
    );
    console.log('\nEnvironment values used:');
    console.log('BASE_URL=', BASE_URL);
    console.log(
      'NEXT_PUBLIC_FIREBASE_API_KEY=',
      API_KEY ? '[REDACTED]' : '<missing>'
    );
    console.log(
      'FIREBASE_SERVICE_ACCOUNT_KEY=',
      SERVICE_ACCOUNT ? '[REDACTED]' : '<missing>'
    );
    console.log('\nSample curl to call checkout (replace <ID_TOKEN>):');
    console.log(
      `curl -X POST ${BASE_URL}/api/checkout -H "Authorization: Bearer <ID_TOKEN>" -H "Content-Type: application/json" -d '{"items":[{"name":"Test product","price":100,"quantity":1}]}'`
    );
    return;
  }

  if (!SERVICE_ACCOUNT) {
    fatal(
      'Missing FIREBASE_SERVICE_ACCOUNT_KEY (or GOOGLE_APPLICATION_CREDENTIALS) in env'
    );
  }
  if (!API_KEY) {
    fatal('Missing NEXT_PUBLIC_FIREBASE_API_KEY in env');
  }

  // Initialize admin
  try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      const parsed = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
      admin.initializeApp({ credential: admin.credential.cert(parsed) });
    } else {
      admin.initializeApp();
    }
  } catch (err) {
    fatal(
      'Failed to initialize firebase-admin: ' +
        (err instanceof Error ? err.message : String(err))
    );
  }

  const uid = 'test-user-' + Date.now();
  console.log('Creating custom token for uid', uid);
  const customToken = await admin.auth().createCustomToken(uid);

  console.log('Exchanging custom token for ID token via Identity Toolkit');
  const exchangeRes = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: customToken, returnSecureToken: true }),
    }
  );
  const exchangeJson = await exchangeRes.json();
  if (!exchangeRes.ok) {
    console.error('Exchange failed', exchangeJson);
    process.exit(1);
  }
  const idToken = exchangeJson.idToken;
  console.log(
    'Received ID token (short):',
    idToken ? idToken.slice(0, 12) + '...' : '<none>'
  );

  console.log('Calling /api/checkout at', BASE_URL + '/api/checkout');
  const checkoutRes = await fetch(BASE_URL + '/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      items: [{ name: 'Test product', price: 100, quantity: 1 }],
    }),
  });
  const checkoutJson = await checkoutRes.json();
  console.log('Checkout response status:', checkoutRes.status);
  console.log(JSON.stringify(checkoutJson, null, 2));
}

main().catch((err) => {
  console.error('Error in script:', err);
  process.exit(1);
});
