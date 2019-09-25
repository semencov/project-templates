const colors = {
  n0: '#fff',
  n100: '#fbfbfb',
  n200: '#f5f6f7',
  n300: '#e4e5e7',
  n400: '#dbdddf',
  n500: '#bfc2c6',
  n600: '#82888f',
  n700: '#60666c',
  n800: '#404347',
  n900: '#1b1b1b',
  n1000: '#000',

  b100: '#b3d3ff',
  b200: '#77acff',
  b300: '#3c81ff',
  b400: '#1e6cff',
  b500: '#05f',
  b600: '#004fdf',
  b700: '#0048bf',
  b800: '#00419f',
  b900: '#003880',

  g500: '#09c675',

  y500: '#ffdd38',

  r500: '#ff5722',
};

module.exports = {
  theme: {
    screen: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    colors: {
      ...colors,
      'primary-light': colors.b200,
      'primary': colors.b500,
      'primary-dark': colors.b600,

      'error': colors.r500,
      'success': colors.g500,

      'draft': colors.y500,
      'published': colors.g500,
      'prototype': colors.primary,
      'unpublished': colors.r500,

      'dark': colors.n900,
      'light': colors.n0,
    },
    textColor: {
      ...colors,
      'dark': colors.n900,
      'light': colors.n0,

      'default': 'rgba(#000, 0.9)',
      'dimmed': 'rgba(#000, 0.6)',
      'invers': 'rgba(#fff, 0.9)',
      'accent': 'rgba(#006efe, 0.9)',
      'danger': 'rgba(234, 15, 65, 0.9)',
    },
    linearGradients: {
      colors: {
        'grey-light':   ['#ffffff', '#efefef'],
        'grey-dark':    ['#b8c2cc', '#8795a1'],
        'red-dark':     ['#e3342f', '#cc1f1a'],
        'orange-dark':  ['#f6993f', '#de751f'],
        'yellow-dark':  ['#ffed4a', '#f2d024'],
        'green-dark':   ['#38c172', '#1f9d55'],
        'teal-dark':    ['#4dc0b5', '#38a89d'],
        'blue-dark':    ['#3490dc', '#2779bd'],
        'indigo-dark':  ['#6574cd', '#5661b3'],
        'purple-dark':  ['#9561e2', '#794acf'],
        'pink-dark':    ['#f66d9b', '#eb5286'],
      },
    },
    spacing: {
      'xs': '2px',
      's': '4px',
      'm': '8px',
      'l': '16px',
      'xl': '24px',
      'xxl': '48px',
      '3xl': '64px',
      '4xl': '128px',
    },
    fontSize: {
      'xs': '11px',
      's': '13px',
      'm': '17px',
      'l': '28px',
      'xl': '36px',
      '2xl': '48px',
      '3xl': '64px',
      base: '16px',
    },
    lineHeight: {
      'lg': '1.6',
      'md': '1.33',
      'sm': '1.25',
      'none': '1',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-spacing-helpers'),
    require('tailwindcss-gradients')(),
    require('tailwindcss-font-inter')({
      baseFontSize: 16,
      baseLineHeight: 1.33,
      importFontFace: true,
      disableUnusedFeatures: false
    })
  ],
  corePlugins: {
    preflight: false,
    float: false,
  }
}
