const admin = require('firebase-admin');
const fs = require('fs');
(async () => {
  try {
    const p = process.env.HOME + '/.secrets/webistrydesk-firebase-admin.json';
    const s = fs.readFileSync(p, 'utf8');
    const parsed = JSON.parse(s);
    admin.initializeApp({ credential: admin.credential.cert(parsed) });
    const token = await admin.auth().createCustomToken('test-e2e');
    console.log('TOKEN_OK', token.slice(0, 12) + '...');
  } catch (err) {
    console.error('ERR_FULL', err);
    process.exit(1);
  }
})();
