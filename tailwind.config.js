/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'mbl': {'min': '320px', 'max': '480px'},
      // => @media (min-width: 320px and max-width: 480px){ ... } For Mobile Devices

      'tab': {'min': '481px', 'max': '768px'},
      // => @media (max-width: 768px){ ... } For iPads and Tablets

      'lap': {'min': '769px' , 'max': '1024px'},
      // => @media (max-width: 1024px){ ... } For Laptops and Small Screens

      'dsk': {'min': '1025px','max': '1200px'},
      // => @media (max-width: 1200px){ ... } For Desktops and Large Screens

      'tv': {'min': '1201px'},
      // => @media (min-width: 1201px){ ... } For TV and Extra Large Screens

      'msm': {'max': '640px'},
      // => @media (max-width: 640px){ ... }

      'mmd': {'max': '768px'},
      // => @media (max-width: 768px){ ... }

    },
    extend: {
      fontFamily: {
        'primary': ['Nunito Sans']
      },
      colors: {
        'dark-els': 'hsl(209, 23%, 22%)',
        'dark-bg': 'hsl(207, 26%, 17%)',
        'dark-text': 'hsl(0, 0%, 100%)',
        'light-text': 'hsl(208, 15%, 8%)',
        'light-input': 'hsl(0, 0%, 52%)',
        'light-bg': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

