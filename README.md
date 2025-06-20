# 🎨 Maverick Design Tokens

A powerful, scalable design token package built to power consistent theming in any web project using Tailwind CSS and JavaScript/TypeScript.

This package allows teams to:
- Use a default theme (primary/secondary/tertiary colors + states)
- Generate custom brand themes easily using our CLI

---

## 🚀 Installation

Install via NPM or Yarn:

```bash
npm install @maverick-design-system/ds-tokens
```

or

```bash
yarn add @maverick-design-system/ds-tokens
```

---

## 🧩 Generate a Custom Theme

We provide a CLI to help you define your brand colors and automatically generate token variants like `hover`, `press`, and readable `on` colors.

### 🔧 Step-by-Step:

### 1. **Run the Theme Generator**

```bash
npx @maverick-design-system/ds-tokens init-theme
```

You’ll be prompted to enter your base colors:

```
🧩 Let's create your custom theme!
🎨 Enter primary base color (e.g. #3b82f6): #10b981
🎨 Enter secondary base color (e.g. #9333ea): #6366f1
🎨 Enter tertiary base color (e.g. #0d9488): #f59e0b

✅ Custom theme generated at: dist/customTheme.js
```

---

### 2. **Use in Tailwind CSS**

Update your `tailwind.config.js`:

```js
const colors = require('@maverick-design-system/ds-tokens/dist/customTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary.DEFAULT,
        primaryHover: colors.primary.hover,
        primaryPress: colors.primary.press,
        onPrimary: colors.primary.on,

        secondary: colors.secondary.DEFAULT,
        secondaryHover: colors.secondary.hover,
        // ... Add tertiary as needed
      },
    },
  },
};
```

---

### 3. **Use Tokens in Your App**

Use Tailwind utility classes in your components:

```html
<button class="bg-primary hover:bg-primaryHover text-onPrimary">
  Click Me
</button>
```

---

## 📦 Default Theme (Optional)

If you do not run the CLI, you can fall back to the default theme:

```js
const colors = require('@maverick-design-system/ds-tokens/dist/colors');
```

---

## 🧠 Notes

- Theme is saved at `dist/customTheme.js`
- You can re-run the generator anytime:
  ```bash
  npx @maverick-design-system/ds-tokens init-theme
  ```
- All tokens are generated with hover, press, and readable `on` text color.

---

## 🙌 License

MIT — Free to use, modify and include in any project. For enterprise support, reach out to the Maverick Design System team.

