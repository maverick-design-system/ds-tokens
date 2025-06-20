const fs = require("fs");
const tiny = require("tinycolor2");

function makeVariants(hex) {
  const hover = tiny(hex).darken(10).toHexString();
  const press = tiny(hex).darken(20).toHexString();
  const onText = tiny(hex).isLight() ? "#000000" : "#ffffff";
  return {
    DEFAULT: hex,
    hover,
    press,
    on: onText,
  };
}

function buildTheme({ primary, secondary, tertiary }) {
  return {
    primary: makeVariants(primary),
    secondary: makeVariants(secondary),
    tertiary: makeVariants(tertiary),
  };
}

const defaultTheme = buildTheme({
  primary: "#3b82f6",
  secondary: "#9333ea",
  tertiary: "#0d9488",
});

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync(
  "dist/colors.js",
  "module.exports = " + JSON.stringify(defaultTheme, null, 2) + ";"
);

console.log("✅  dist/colors.js generated");
