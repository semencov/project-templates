import generate from './generate';

const loading = false;

module.exports = {
  globalName: '{{name}}',
  loading,

  head: {
    title: '{{title}}',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js Demo Site' }
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@bazzite/nuxt-optimized-images',
    'nuxt-svg-loader',
    [
      '@bazzite/nuxt-netlify',
      {
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        headers: {
          '/*': [
            'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
            'X-Content-Type-Options: nosniff',
            'Content-Security-Policy: '
              + 'connect-src "self"; object-src "none"; frame-ancestors "none"; form-action "none"; base-uri "none"'
          ]
        }
      }
    ],
    [
      'nuxt-netlify-http2-server-push',
      {
        resources: [
          { path: '**/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
          { path: '**/*.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
          { path: '**/*.css', as: 'style' },
          { path: '**/*.js', as: 'script' }
        ]
      }
    ]
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/index.pcss'
  },

  optimizedImages: {
    optimizeImages: true,
    defaultImageLoader: 'responsive-loader',
    svgo: {
      plugins: [{ removeComments: true }]
    }
  },

  hooks: {
    generate
  },

  build: {
    analyze: true,
    extractCSS: false,
    publicPath: '/_',

    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-hexrgba': {},
        'postcss-responsive-type': {},
        'postcss-pxtorem': {
          propList: ['*'],
          selectorBlackList: ['html'],
          rootValue: 17
        }
      }
    },

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });

        // config.devtool = '#source-map'
        config.devtool = 'eval-source-map'; // create sourcemaps
      }
    }
  }
};
