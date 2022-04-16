const { path } = require('@vuepress/utils')

const fooTheme = {
  name: 'vuepress-theme-foo',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue'),
  },
  // ...
}
