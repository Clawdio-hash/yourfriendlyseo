import path from 'node:path';
import sharp from 'sharp';

const input = String.raw`C:\Users\emilm\.openclaw\media\inbound\file_1---9c434af7-ffa0-4932-9c24-e784c3acdab8.jpg`;
const outDir = String.raw`C:\Users\emilm\.openclaw\workspace\yourfriendlyseo\public`;

await sharp(input)
  .trim()
  .png()
  .toFile(path.join(outDir, 'logo-wordmark.png'));

console.log('Trimmed logo wordmark created.');
