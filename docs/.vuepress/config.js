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
      '/up_cloud/cdp.md',
      '/up_cloud/dr.md'
    ]
        },
        {
          title: '数据云间流动',
          collapsable: false,
          children: [
      '/cross_cloud/migrate.md',
      '/cross_cloud/archieve.md',
      '/cross_cloud/backup.md',
      '/cross_cloud/cdp.md',
      '/cross_cloud/dr.md'
    ]
        },
        {
          title: '数据流动下云',
          collapsable: false,
          children: [
      '/down_cloud/migrate.md',
      '/down_cloud/archieve.md',
      '/down_cloud/backup.md',
      '/down_cloud/cdp.md',
      '/down_cloud/dr.md'
    ]
        },
        {
          title: '用户手册',
          collapsable: false,
          children: [
      '/man/install_svr.md',
      '/man/update_lic.md',
      '/man/install_s3.md',
      '/man/install_proxy.md',
      '/man/depoly_proxy.md',
      '/man/install_webgui.md',
      '/man/add_policy.md',
      '/man/add_vm.md',
      '/man/depoly_vm.md',
      '/man/restore_vm.md',
      '/man/backup_ensurance.md',
      '/man/support_list'
    ]
        }
      ],
  nav: [
        { text: '主页', link: '/' },
        { text: '数据流动上云', link: '/up_cloud/migrate.md' },
        { text: '数据云间流动', link: '/cross_cloud/migrate.md' },
        { text: '数据流动下云', link: '/down_cloud/migrate.md' },
        { text: '用户手册', link: '/man/install_svr.md' },
        { text: 'SAAS系统登录', link: 'http://49.233.90.54' },
      ]
  }
}
