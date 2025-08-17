// Simple ESM smoke check: fetch a URL provided via SMOKE_URL and expect a 200 status.
import https from 'https';

const SMOKE_URL = process.env.SMOKE_URL;

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
  if (!SMOKE_URL) {
    console.log('SMOKE_URL not set — skipping smoke check.');
    process.exit(0);
  }

  try {
    const ok = await check(SMOKE_URL);
    if (!ok) {
      console.error('Smoke check failed for', SMOKE_URL);
      process.exit(2);
    }
    console.log('Smoke OK');
  } catch (e) {
    console.error('Smoke error', e);
    process.exit(3);
  }
})();
