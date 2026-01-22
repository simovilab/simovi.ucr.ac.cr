import { pt } from "zod/locales";

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
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'pt', name: 'Português', language: 'pt-BR', file: 'pt.json' }
    ],
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    pages: {
      research: { es: '/investigacion', en: '/research', pt: '/pesquisa' },
      development: { es: '/desarrollo', en: '/development', pt: '/desenvolvimento' },
      services: { es: '/servicios', en: '/services', pt: '/servicos' },
      teaching: { es: '/docencia', en: '/teaching', pt: '/ensino' },
      team: { es: '/equipo', en: '/team', pt: '/equipe' },
      partners: { es: '/alianzas', en: '/partners', pt: '/parcerias' },
      news: { es: '/noticias', en: '/news', pt: '/noticias' },
      about: { es: '/acerca', en: '/about', pt: '/sobre' },
      contact: { es: '/contacto', en: '/contact', pt: '/contato' },
      pricing: { es: '/precios', en: '/pricing', pt: '/precos' },
      blog: { es: '/blog', en: '/blog', pt: '/blog' },
      login: { es: '/ingresar', en: '/login', pt: '/login' },
      signup: { es: '/registro', en: '/signup', pt: '/registro' }
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