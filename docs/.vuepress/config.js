module.exports = {
    // site config
    lang: 'en-US',
    title: 'Blogs',
    description: 'This is my first VuePress site',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
        navbar:[
            {text: 'Home', link: '/'},
            {text: 'blog', link: '/blogs/blogIndex.md'},
        ],
       sidebar:{
           
       }
    },
   
  }