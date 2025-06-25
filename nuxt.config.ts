// import { visualizer } from 'rollup-plugin-visualizer'
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["vuetify/styles"],
  components: true,
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    //...
  ],
  vite: {
    optimizeDeps: {
      include: ["vuetify", "vue", "vue-router"],
    },
  },
  nitro: {
    prerender: {
      ignore: ["/about", "/contact", "/blog", "/wishlist", "/cart", "/profile"],
    },
  },
});
