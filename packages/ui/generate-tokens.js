const fs = require('node:fs');
const resolveConfig = require('tailwindcss/resolveConfig');
const defaultColors = require('tailwindcss/colors');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

// Separate custom colors from Tailwind default colors
const customColors = {};
const tailwindColors = {};

// Separates custom colors from Tailwind default colors.
Object.entries(fullConfig.theme.colors).forEach(([key, value]) => {
  if (defaultColors[key] === value) {
    tailwindColors[key] = value;
  } else {
    customColors[key] = value;
  }
});

const tokens = {
  customColors,
  tailwindColors,
  spacing: fullConfig.theme.spacing,
  typography: fullConfig.theme.fontFamily,
  borderRadius: fullConfig.theme.borderRadius,
};

// Generate TypeScript content
const tsContent = `
export const customColors = ${JSON.stringify(tokens.customColors, null, 2)};
export const tailwindColors = ${JSON.stringify(tokens.tailwindColors, null, 2)};
export const spacing = ${JSON.stringify(tokens.spacing, null, 2)};
export const typography = ${JSON.stringify(tokens.typography, null, 2)};
export const borderRadius = ${JSON.stringify(tokens.borderRadius, null, 2)};
`;

// Save tokens to a TypeScript file
fs.writeFileSync('../../apps/docs/tokens.ts', tsContent);

// eslint-disable-next-line no-console -- On success, log a message.
console.log('✅ Tokens generated successfully!');
