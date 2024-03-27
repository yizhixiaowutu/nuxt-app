// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "vuetify-nuxt-module",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    // "dayjs-nuxt", // error
    "@formkit/auto-animate/nuxt",
  ],
  vuetify: {},
});
