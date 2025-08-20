import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 384, 512];
const svgPath = path.resolve(process.cwd(), 'public', 'logo-webistrydesk.svg');
const outPublic = path.resolve(process.cwd(), 'public');
const outApp = path.resolve(process.cwd(), 'app');

if (!fs.existsSync(svgPath)) {
  console.error('SVG source not found at', svgPath);
  process.exit(1);
}

async function gen() {
  for (const size of sizes) {
    const buffer = await sharp(svgPath).resize(size, size).png().toBuffer();

    const name = `favicon-${size}x${size}.png`;
    const out = path.join(outPublic, name);
    await fs.promises.writeFile(out, buffer);
    console.log('Wrote', out);

    // write android and icon sizes
    if (size === 192) {
      await fs.promises.writeFile(
        path.join(outPublic, 'android-chrome-192x192.png'),
        buffer
      );
    }
    if (size === 512) {
      await fs.promises.writeFile(
        path.join(outPublic, 'android-chrome-512x512.png'),
        buffer
      );
      // ensure app dir exists
      await fs.promises.mkdir(outApp, { recursive: true });
      await fs.promises.writeFile(path.join(outApp, 'icon.png'), buffer);
    }
    if (size === 180) {
      await fs.promises.writeFile(
        path.join(outPublic, 'apple-touch-icon.png'),
        buffer
      );
      await fs.promises.writeFile(path.join(outApp, 'apple-icon.png'), buffer);
    }
  }
}

gen().catch((err) => {
  console.error(err);
  process.exit(1);
});
