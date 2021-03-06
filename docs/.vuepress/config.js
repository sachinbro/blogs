module.exports = {
    // site config
    lang: 'en-US',
    title: 'Blogs',
    description: 'This is my first VuePress site',
    base:'/blogs/',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
        navbar:[
            {text: 'Home', link: 'https://sachinshilwal.com.np'},
            {text: 'Blogs', link: '/blogIndex/'}
            
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