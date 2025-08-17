const https = require('https');

// Simple smoke check: fetch the root page and expect a 200 status.
function check(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        resolve(res.statusCode === 200);
      })
      .on('error', reject);
  });
}

(async function main() {
  try {
    const ok = await check('https://webistrydesk.vercel.app/');
    if (!ok) {
      console.error('Smoke check failed');
      process.exit(2);
    }
    console.log('Smoke OK');
  } catch (e) {
    console.error('Smoke error', e);
    process.exit(3);
  }
})();
