const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/generar-java/'
  }
} : {}
module.exports = {
  ...routerBase,
  modules: [
    'bootstrap-vue/nuxt',
    ['bootstrap-vue/nuxt', { css: false }]
  ],
  plugins: [
    { src: '~/plugins/web-font-loader', ssr: false }
  ],
  head: {
    title: 'Generador Java',
    meta: [
      { name: 'author', content: 'Cabrera Mauricio Hernan' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Deja de perder el tiempo escribiendo a mano cada get y set de tus atributos en BlueJ. Generalos solo con un par de clicks.' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'https://hernancabrera.github.io/generar-java/' },
      { name: 'twitter:title', content: 'Generador Java' },
      { name: 'twitter:description', content: 'Deja de perder el tiempo escribiendo a mano cada get y set de tus atributos en BlueJ. Generalos solo con un par de clicks.' },
      { name: 'twitter:creator', content: 'Cabrera Mauricio Hernan' },
      { name: 'twitter:image', content: 'https://hernancabrera.github.io/generar-java/safe_image.jpg' },
      { property: 'og:title', content: 'Generador Java' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://hernancabrera.github.io/generar-java/' },
      { property: 'og:image', content: 'https://hernancabrera.github.io/generar-java/safe_image.jpg' },
      { property: 'og:site_name', content: 'Generador Java' },
      { property: 'og:description', content: 'Deja de perder el tiempo escribiendo a mano cada get y set de tus atributos en BlueJ. Generalos solo con un par de clicks.' },
      { itemprop: 'description', content: 'Deja de perder el tiempo escribiendo a mano cada get y set de tus atributos en BlueJ. Generalos solo con un par de clicks.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icono-java.ico' }
    ],
    script: [
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=121697227' },
      {
        innerHTML: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-121697227-1');

            ga('create', 'UA-121697227-1', 'auto');
            ga('set', 'page', '/generar-java')
            ga('send', 'pageview');
          `
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
  css: [
    'animate.css'
  ],
  loading: { color: '#EA7956' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
