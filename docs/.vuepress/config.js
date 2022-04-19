module.exports = {
    // site config
    lang: 'en-US',
    title: 'Blogs',
    description: 'This is my first VuePress site',
    base:'/',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
        navbar:[
            {text: 'Home', link: '/'},
            
        ],
    },
   plugins: [
     [
       '@vuepress/plugin-search',
       {
         locales:{
           '/' :{
             placeholder: 'Search'
           }
         }
       }
     ]
   ]
  }