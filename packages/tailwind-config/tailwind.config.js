/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        data: {
            loading: 'ui~="loading"',
            disabled: 'ui~="disabled"',
        },
        extend: {
            keyframes: {
                pulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(0.95)' },
                },
            },
            zIndex: {
                'nav-overlay': '100',
                nav: '110',
                dropdown: '135',
                'modal-overlay': '140',
                modal: '150',
                tooltip: '155',
                toast: '160',
            },
            boxShadow: {
                dialog: [
                    '0px 4px 20px 0 rgba(0, 0, 0, 0.1)',
                    '0px 1px 2px 0 rgba(0, 0, 0, 0.25)',
                ],
            },
            containers: {
                '@8xl': '96rem', // 1536
            },
        },
        borderRadius: {
            none: '0px',
            2: '0.125rem',
            DEFAULT: '0.25rem',
            6: '0.375rem',
            8: '0.5rem',
            10: '0.625rem',
            12: '0.75rem',
            16: '1rem',
            20: '1.25rem',
            24: '1.5rem',
            36: '2.25rem',
            52: '3.25rem',
            full: '9999px',
        },
        spacing: {
            px: '1px',
            0: '0',
            2: '0.125rem',
            4: '0.25rem',
            6: '0.375rem',
            8: '0.5rem',
            10: '0.625rem',
            12: '0.75rem',
            14: '0.875rem',
            16: '1rem',
            18: '1.125rem',
            20: '1.25rem',
            24: '1.5rem',
            28: '1.75rem',
            32: '2rem',
            36: '2.25rem',
            40: '2.5rem',
            44: '2.75rem',
            48: '3rem',
            56: '3.5rem',
            52: '3.25rem',
            64: '4rem',
            80: '5rem',
            96: '6rem',
            112: '7rem',
            128: '8rem',
            192: '12rem',
            320: '20rem',
        },
        fontSize: {
            just10: '0.625rem',
            just12: '0.75rem',
            just14: '0.875rem',
            just16: '1rem',
            just18: '1.125rem',
            just20: '1.25rem',
            just24: '1.5rem',
            just30: '1.875rem',
            just38: '2.375rem',
            just46: '2.875rem',
            just56: '3.5rem',
            10: ['0.625rem', { lineHeight: '1.125rem' }], // 10/20
            12: ['0.75rem', { lineHeight: '1.25rem' }], // 12/20
            14: ['0.875rem', { lineHeight: '1.375rem' }], // 14/22
            16: ['1rem', { lineHeight: '2rem' }], // 16/24
            18: ['1.125rem', { lineHeight: '1.75rem' }], // 20/28
            20: ['1.25rem', { lineHeight: '1.75rem' }], // 20/28
            24: ['1.5rem', { lineHeight: '2rem' }], // 24/32
            30: ['1.875rem', { lineHeight: '2.375rem' }], // 30/38
            38: ['2.375rem', { lineHeight: '2.875rem' }], // 38/46
            46: ['2.875rem', { lineHeight: '3.375rem' }], // 46/54
            56: ['3.5rem', { lineHeight: '4rem' }], // 56/64
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                'input[type="search"]::-webkit-search-cancel-button': {
                    display: 'none',
                },
                'input[type="search"]::-ms-clear': {
                    display: 'none',
                },
            });
        }),
    ],
};
