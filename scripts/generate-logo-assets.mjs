import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const input = String.raw`C:\Users\emilm\.openclaw\media\inbound\file_1---9c434af7-ffa0-4932-9c24-e784c3acdab8.jpg`;
const outDir = String.raw`C:\Users\emilm\.openclaw\workspace\yourfriendlyseo\public`;

fs.copyFileSync(input, path.join(outDir, 'logo-wordmark.jpg'));

const icon = sharp(input).extract({ left: 330, top: 20, width: 540, height: 540 });
await icon.clone().resize(512, 512).png().toFile(path.join(outDir, 'logo-mark.png'));
await icon.clone().resize(192, 192).png().toFile(path.join(outDir, 'favicon-192.png'));
await icon.clone().resize(32, 32).png().toFile(path.join(outDir, 'favicon-32.png'));
await icon.clone().resize(180, 180).png().toFile(path.join(outDir, 'apple-touch-icon.png'));

console.log('Generated logo assets.');
