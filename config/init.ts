/**
 * @author: @davaskwebltd
 */
const { root } = require('../../webpack/helpers');

var head_config = function(version, theme_color) {
  return {
    link: [
      /** <link> tags for 'apple-touch-icon' (AKA Web Clips). **/
      { rel: 'apple-touch-icon', href: 'assets/icon/apple-touch-icon.png?v='+version },
      { rel: 'apple-touch-icon', href: 'assets/icon/apple-touch-icon-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'assets/icon/apple-touch-icon-57x57.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'assets/icon/apple-touch-icon-57x57-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'assets/icon/apple-touch-icon-60x60.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'assets/icon/apple-touch-icon-60x60-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'assets/icon/apple-touch-icon-72x72.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'assets/icon/apple-touch-icon-72x72-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'assets/icon/apple-touch-icon-76x76.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'assets/icon/apple-touch-icon-76x76-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'assets/icon/apple-touch-icon-114x114.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'assets/icon/apple-touch-icon-114x114-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'assets/icon/apple-touch-icon-120x120.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'assets/icon/apple-touch-icon-120x120-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'assets/icon/apple-touch-icon-144x144.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'assets/icon/apple-touch-icon-144x144-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'assets/icon/apple-touch-icon-152x152.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'assets/icon/apple-touch-icon-152x152-precomposed.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'assets/icon/apple-touch-icon-180x180.png?v='+version },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'assets/icon/apple-touch-icon-180x180-precomposed.png?v='+version },

      /** <link> tags for android web app icons **/
      { rel: 'icon', type: 'image/png', sizes: '36x36', href: 'assets/icon/android-chrome-36x36.png?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '48x48', href: 'assets/icon/android-chrome-48x48.png?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '72x72', href: 'assets/icon/android-chrome-72x72.png?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'assets/icon/android-chrome-96x96.png?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '144x144', href: 'assets/icon/android-chrome-144x144.png?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'assets/icon/android-chrome-192x192.png?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '256x256', href: 'assets/icon/android-chrome-256x256.png?v='+version },

      /** <link> tags for favicons **/
      { rel: 'shortcut icon', href: 'assets/icon/favicon.ico?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'assets/icon/favicon-16x16.png?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'assets/icon/favicon-32x32.png?v='+version },
      { rel: 'icon', type: 'image/png', sizes: '194x194', href: 'assets/icon/favicon-194x194.png?v='+version },

      /** <link> tags for a Web App Manifest **/
      { rel: 'manifest', href: 'assets/icon/manifest.json' },

      { rel: 'mask-icon', href: 'assets/icon/safari-pinned-tab.svg?v='+version, color: theme_color }
    ],
    meta: [
      { name: 'msapplication-TileColor', content: theme_color },
      { name: 'msapplication-TileImage', content: 'assets/icon/mstile-70x70.png?v='+version, '=content': true },
      { name: 'msapplication-TileImage', content: 'assets/icon/mstile-144x144.png?v='+version, '=content': true },
      { name: 'msapplication-TileImage', content: 'assets/icon/mstile-150x150.png?v='+version, '=content': true },
      { name: 'msapplication-TileImage', content: 'assets/icon/mstile-310x150.png?v='+version, '=content': true },
      { name: 'msapplication-TileImage', content: 'assets/icon/mstile-310x310.png?v='+version, '=content': true },
      { name: 'msapplication-config', content: 'assets/icon/browserconfig.xml?v='+version },
      { name: 'theme-color', content: theme_color }
    ]
  };
}

const dwl = {
  path: {
    polyfills: root('src/build/assets/ts/polyfills.ts'),
    vendors: root('src/build/assets/ts/vendors.ts'),
    index: root('src/build/index.ejs'),
    styles: {
      css: root('src/root/assets/css'),
      scss: root('src/build/assets/scss')
    }
  },
  static: [
    { from: root('src/static') }
  ],
  server: {
    port: 80,
    ip: '0.0.0.0'
  },
  theme: {
    title: 'AWS | dwl',
    description: 'Angular2 Webpack Starter Customized by @davaskwebltd',
    author: 'davask web ltd.',
    baseUrl: '/',
    manifest_title: 'davask web',
    theme_color: '#5496c6',
    version: new Date().getTime()
  }
};

dwl.theme['head_config'] = head_config(dwl.theme.version,dwl.theme.theme_color);

module.exports = {
  dwl: dwl
};
