import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = [path.join(root, 'src')];
const exts = new Set(['.astro', '.md', '.mdx', '.txt']);

const mojibakePatterns = [
  { label: 'replacement character', regex: /\uFFFD/g },
  { label: 'UTF-8 mojibake marker Ãƒ', regex: /Ãƒ./g },
  { label: 'UTF-8 mojibake marker Ã‚', regex: /Ã‚./g },
  { label: 'UTF-8 mojibake marker Ã¢â‚¬', regex: /Ã¢â‚¬/g },
  { label: 'UTF-8 mojibake marker Ã¢â‚¬â„¢', regex: /Ã¢â‚¬â„¢/g },
  { label: 'UTF-8 mojibake marker Ã¢â‚¬Å“', regex: /Ã¢â‚¬Å“/g },
  { label: 'UTF-8 mojibake marker Ã¢â‚¬\u009d', regex: /Ã¢â‚¬\u009d/g },
  { label: 'UTF-8 emoji mojibake marker Ã°Å¸', regex: /Ã°Å¸/g },
];

const riskyPunctuationPattern = /[\u2018\u2019\u201C\u201D\u2013\u2014\u2026]/g;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (exts.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

const offenders = [];
const punctuationWarnings = [];

for (const target of targets) {
  if (!fs.existsSync(target)) continue;
  for (const file of walk(target)) {
    const text = fs.readFileSync(file, 'utf8');
    for (const pattern of mojibakePatterns) {
      const match = text.match(pattern.regex);
      if (match?.length) {
        offenders.push({
          file: path.relative(root, file),
          label: pattern.label,
          sample: match[0],
          count: match.length,
        });
      }
    }
    const punctuationMatch = text.match(riskyPunctuationPattern);
    if (punctuationMatch?.length) {
      punctuationWarnings.push({
        file: path.relative(root, file),
        count: punctuationMatch.length,
      });
    }
  }
}

if (punctuationWarnings.length) {
  console.warn('\nText safety warnings (non-ASCII punctuation found):');
  for (const warning of punctuationWarnings) {
    console.warn(`- ${warning.file} (${warning.count})`);
  }
  console.warn('These are warnings only, but plain ASCII punctuation is safer for this repo.\n');
}

if (offenders.length) {
  console.error('\nText safety check failed. Suspicious mojibake was found:\n');
  for (const offender of offenders) {
    console.error(`- ${offender.file}: ${offender.label} x${offender.count} (sample: ${JSON.stringify(offender.sample)})`);
  }
  process.exit(1);
}

console.log('Text safety check passed. No suspicious mojibake found.');
