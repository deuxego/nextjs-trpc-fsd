/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: "none",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
