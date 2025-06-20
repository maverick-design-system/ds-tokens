#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const tiny = require('tinycolor2');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function makeVariants(hex) {
  const hover = tiny(hex).darken(10).toHexString();
  const press = tiny(hex).darken(20).toHexString();
  const onText = tiny(hex).isLight() ? '#000000' : '#ffffff';
  return {
    DEFAULT: hex,
    hover,
    press,
    on: onText,
  };
}

async function main() {
  console.log('🧩 Let\'s create your custom theme!');
  const primary = await ask('🎨 Enter primary base color (e.g. #3b82f6): ');
  const secondary = await ask('🎨 Enter secondary base color (e.g. #9333ea): ');
  const tertiary = await ask('🎨 Enter tertiary base color (e.g. #0d9488): ');

  const theme = {
    primary: makeVariants(primary),
    secondary: makeVariants(secondary),
    tertiary: makeVariants(tertiary),
  };

  const filePath = path.join(process.cwd(), 'dist', 'customTheme.js');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(
    filePath,
    'module.exports = ' + JSON.stringify(theme, null, 2) + ';\n'
  );

  console.log(`\n✅ Custom theme generated at: dist/customTheme.js`);
  rl.close();
}

main();
