module.exports = {
    title: 'Clouvm',
    description: '云虚拟机数据保护系统',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        sidebarDepth: 2,
        sidebar: [
          {
            title: "数据流动上云",
            collapsable: false,
            children: [
				'/up_cloud/migrate.md',
				'/up_cloud/archieve.md',
				'/up_cloud/backup.md',
				'/up_cloud/dr.md',
				'/up_cloud/cdp.md'
			]
          },
          {
            title: '数据云间流动',
            collapsable: false,
            children: [
				'/cross_cloud/migrate.md',
				'/cross_cloud/archieve.md',
				'/cross_cloud/backup.md',
				'/cross_cloud/dr.md',
				'/cross_cloud/cdp.md'
			]
          },
          {
            title: '数据流动下云',
            collapsable: false,
            children: [
				'/down_cloud/migrate.md',
				'/down_cloud/archieve.md',
				'/down_cloud/backup.md',
				'/down_cloud/dr.md',
				'/down_cloud/cdp.md'
			]
          }
        ],
		nav: [
          { text: '主页', link: '/' },
          { text: '数据流动上云', link: '/up_cloud/migrate.md' },
          { text: '数据云间流动', link: '/cross_cloud/migrate.md' },
          { text: '数据流动下云', link: '/down_cloud/migrate.md' },
          { text: 'SAAS系统登录', link: 'http://localhost:8002' },
        ]
    }
}
	