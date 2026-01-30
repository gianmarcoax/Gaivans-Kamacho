/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#ff6b35',
                    light: '#ff8555',
                    dark: '#e55a2b',
                },
                dark: {
                    DEFAULT: '#1a1a1a',
                    light: '#2d2d2d',
                    lighter: '#3d3d3d',
                },
                accent: {
                    orange: '#ff6b35',
                    green: '#25d366',
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            animation: {
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'slide-left': 'slideLeft 0.8s ease-out forwards',
                'slide-right': 'slideRight 0.8s ease-out forwards',
                'pulse-whatsapp': 'pulse 2s infinite',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
            },
        },
    },
    plugins: [],
}
