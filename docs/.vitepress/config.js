module.exports = {
    title: '低代码',
    description: '低代码的相关资料',
    base: '/lowcode/',
    markdown: {
        lineNumbers: true, //显示代码行数
    },
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/lowcode/favicon.ico' }]
    ],
    themeConfig: {
        // siteTitle: false,
        // logo: "/logo.svg",
        nav: [
            // {
            //     text: '',
            //     link: "/"
            // }
        ],
        outlineTitle: '在本页面',
        lastUpdatedText: '最近更新时间',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present codeteenager'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/codeteenager/lowcode" }],
        // sidebar: {
        //     "/web/": [

        //         {
        //             text: "基础",
        //             items: [
        //                 {
        //                     text: "介绍",
        //                     link: "/web/introduction",
        //                 }
        //             ],
        //         }
        //     ],
        // },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}