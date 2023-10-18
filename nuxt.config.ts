// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  app:{
    pageTransition:{name:'page',mode:'out-in'}

  },
  modules:[
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ]
})
