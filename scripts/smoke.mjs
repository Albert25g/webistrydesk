#!/usr/bin/env node

/**
 * Simple smoke test to verify the deployed application is working
 */

import https from 'https';
import http from 'http';
import { URL } from 'url';

const SMOKE_URL = process.env.SMOKE_URL;

if (!SMOKE_URL) {
  console.log('⚠️  No SMOKE_URL provided, skipping smoke test');
  process.exit(0);
}

console.log(`🧪 Running smoke test against: ${SMOKE_URL}`);

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;

    const req = client.request(
      url,
      {
        timeout: 10000,
        headers: {
          'User-Agent': 'WebistryDesk-SmokeTest/1.0',
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: body.slice(0, 500), // First 500 chars
          });
        });
      }
    );

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

try {
  const response = await makeRequest(SMOKE_URL);

  console.log(`📊 Status Code: ${response.statusCode}`);
  console.log(
    `📏 Content Length: ${response.headers['content-length'] || 'unknown'}`
  );
  console.log(
    `🎯 Content Type: ${response.headers['content-type'] || 'unknown'}`
  );

  if (response.statusCode >= 200 && response.statusCode < 400) {
    console.log('✅ Smoke test PASSED - Application is responding');

    // Basic content checks
    if (
      response.body.includes('WebistryDesk') ||
      response.body.includes('webistrydesk')
    ) {
      console.log('✅ Content check PASSED - WebistryDesk branding found');
    } else {
      console.log(
        '⚠️  Content check WARNING - WebistryDesk branding not found in response'
      );
    }

    process.exit(0);
  } else {
    console.log(`❌ Smoke test FAILED - HTTP ${response.statusCode}`);
    console.log('Response preview:', response.body.slice(0, 200));
    process.exit(1);
  }
} catch (error) {
  console.log(`❌ Smoke test FAILED - ${error.message}`);
  console.log('Full error:', error);
  process.exit(1);
}
