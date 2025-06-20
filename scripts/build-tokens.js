// scripts/build-tokens.js
// Register ts‑node so Node can require .ts files
require('ts-node/register');           // <– key line

const fs   = require('fs');
const path = require('path');

const tokenFiles = ['colors', 'spacing', 'typography']; // add more if needed
const srcRoot    = path.resolve(__dirname, '../src/tokens');
const distRoot   = path.resolve(__dirname, '../dist');

// make sure dist/ exists
fs.mkdirSync(distRoot, { recursive: true });

tokenFiles.forEach((name) => {
  const src  = path.join(srcRoot, `${name}.ts`);
  const dist = path.join(distRoot, `${name}.js`);

  try {
    // load the TS module (ts-node just registered handles it)
    const mod  = require(src);
    const data = mod.default ?? mod;         // fallback if not using default export

    fs.writeFileSync(
      dist,
      `module.exports = ${JSON.stringify(data, null, 2)};`,
      'utf8'
    );

    console.log(`✅  ${name}.ts  →  dist/${name}.js`);
  } catch (err) {
    console.error(`❌  Could not compile ${name}.ts`, err);
  }
});
