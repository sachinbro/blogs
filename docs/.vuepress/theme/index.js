const { path } = require('@vuepress/utils')

const fooTheme = {
  name: 'vuepress-theme-foo',
  layouts: {
    Layout: path.resolve(__dirname, '/Layout.vue'),
    404: path.resolve(__dirname, '/404.vue'),
  },
  // ...
}
