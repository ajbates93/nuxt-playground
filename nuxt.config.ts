// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    // "@nuxtjs/eslint-module"
    "@nuxtjs/color-mode",
    "nuxt-icon"
  ],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {

  }
})