// font-family: 'Alfa Slab One', cursive;
// font-family: 'Permanent Marker', cursive;
// font-family: 'Saira Stencil One', cursive;

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'alfa': ['"Alfa Slab One"', 'cursive'],
      'marker': ['"Permanent Marker"', 'cursive'],
      'stencil': ['"Saira Stencil One"', 'cursive']
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active ']
  },
  plugins: [],
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
  }
}
