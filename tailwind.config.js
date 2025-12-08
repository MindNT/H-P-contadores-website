/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#389990',
                    50: '#E8F4F3',
                    100: '#D1E9E7',
                    200: '#A3D3CF',
                    300: '#75BDB7',
                    400: '#389990',
                    500: '#2E7D77',
                    600: '#24615E',
                    700: '#1A4545',
                    800: '#10292C',
                    900: '#060D13',
                },
                secondary: {
                    DEFAULT: '#000000',
                    light: '#F5F5F5',
                    gray: '#7A7A7A',
                },
                border: {
                    DEFAULT: '#000000',
                    light: '#E5E7EB',
                },
            },
            maxWidth: {
                'figma': '1512px',
                'container': '1200px',
            },
            height: {
                'figma': '982px',
            },
            width: {
                'figma': '1512px',
            },
            borderWidth: {
                'figma': '1px',
            },
            spacing: {
                'figma-w': '1512px',
                'figma-h': '982px',
            },
        },
    },
    plugins: [],
}
