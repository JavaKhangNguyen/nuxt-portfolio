// import content.json
import content from './static/content.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  antd: { extractStyle: true },
  modules: ["@ant-design-vue/nuxt", "@nuxtjs/seo"],
  css: ["~/assets/css/main.css"],
  vite: {
    resolve: {
      alias: {
        'ant-design-vue/dist': 'ant-design-vue/dist',
        'ant-design-vue/es': 'ant-design-vue/es',
        'ant-design-vue/lib': 'ant-design-vue/es',
        'ant-design-vue': 'ant-design-vue/es',
      },
    },
  },
  site: {
    url: 'npkhang.id.vn',
    name: content.meta.title,
    description: content.meta.description,
    defaultLocale: 'en'
  },
});