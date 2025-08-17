#!/usr/bin/env node
// Small image optimizer script using sharp.
// Scans public/images/** for jpg/png and writes webp and avif variants next to the original file.

import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const root = path.resolve(process.cwd(), 'public', 'images');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full);
    else if (/\.(jpe?g|png)$/i.test(e.name)) await optimize(full);
  }
}

async function optimize(file) {
  try {
    const buf = await fs.readFile(file);
    const base = file.replace(/\.(jpe?g|png)$/i, '');
    await sharp(buf).webp({ quality: 80 }).toFile(base + '.webp');
    await sharp(buf).avif({ quality: 60 }).toFile(base + '.avif');
    console.log('optimized', file);
  } catch (err) {
    console.error('failed to optimize', file, err.message || err);
  }
}

async function main() {
  try {
    await walk(root);
    console.log('done');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
