// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',

  ],

  // Konfigurasi Title & Meta Default (SEO Dasar)
  app: {
    head: {
      title: 'Velox Journey - Private Travel Agent',
      meta: [
        { name: 'description', content: 'Nikmati liburan eksklusif dengan pelayanan terbaik.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap' }
      ]
    }
  },

  // css: ['~/assets/css/main.css'],
})
