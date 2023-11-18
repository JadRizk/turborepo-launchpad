const path = require('path');
const config = require('tailwind-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    './src/**/*.{ts,tsx}',
    path.resolve(__dirname, '../../packages/ui-next/src/**/*.{ts,tsx}'),
  ],
};
