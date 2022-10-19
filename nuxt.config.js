import colors from 'vuetify/es5/util/colors'
import {join} from "path";
import webpack from 'webpack'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  rootDir: __dirname,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - libritary',
    title: 'libritary',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/router',
      {
        path: join(__dirname, 'router'),
        fileName: 'index.js'
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  generate: {
    fallback: true,
    minify: {
      collapseWhitespace: false
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? `[name].modern.js` : `[name].modern.js?v=[contenthash:7]`),
      chunk: ({ isDev }) => (isDev ? `[name].modern.js` : `[name].modern.js?v=[contenthash:7]`),
      img: () => '[path][name].[ext]',
      css: ({ isDev }) => (isDev ? '[name].css' : '[name].css?v=[contenthash:7]')
    },
    babel: {
      compact: true
    },
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },
    html: {
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    transpile: ['vee-validate/dist/rules', 'vue-instantsearch', 'instantsearch.js/es'],
    parallel: false,
    cache: false,
    hardSource: false,
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev }) {
      if (isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  server: {
    port: 3000,
    host: "localhost"
  },
}
