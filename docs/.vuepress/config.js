module.exports = {
  title: "csdxy的博客",
  base: '/',
  port: 8020,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: "Linux",
        link: "/linux/"
      }
    ],
    sidebar: {
      "/linux/": [
        {
          title: 'Linux',
          collapsable: false,
          children: []
        }
      ],
    },
    sidebarDepth: 2
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
          margin: 16
      }
    },
    '@vuepress/back-to-top':true
  }
};
