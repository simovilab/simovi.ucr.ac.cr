// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-studio',
    '@nuxtjs/i18n'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  compatibilityDate: '2024-07-11',

  i18n: {
    defaultLocale: 'es',
    locales: [
      { code: 'es', name: 'Español', language: 'es-CR', file: 'es.json' },
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' }
    ],
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    pages: {
      research: { es: '/investigacion', en: '/research' },
      development: { es: '/desarrollo', en: '/development' },
      services: { es: '/servicios', en: '/services' },
      teaching: { es: '/docencia', en: '/teaching' },
      team: { es: '/equipo', en: '/team' },
      partners: { es: '/alianzas', en: '/partners' },
      news: { es: '/noticias', en: '/news' },
      about: { es: '/acerca', en: '/about' },
      contact: { es: '/contacto', en: '/contact' },
      pricing: { es: '/precios', en: '/pricing' },
      blog: { es: '/blog', en: '/blog' },
      login: { es: '/ingresar', en: '/login' },
      signup: { es: '/registro', en: '/signup' }
    }
  },

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})