require('dotenv').config();
module.exports = {
    title: "GitHub入門講座",
    locales: {
        '/': {
            lang: 'ja',
        },
    },
    themeConfig: {
        description: "GitHubを用いた共同開発のフロー",
        nav: [],
        sidebar: [
            '/',
            ['/1.gitを用いた共同開発のフロー/', "gitを用いた共同開発のフロー"],
            ['/2.はじめてのGithub/', "はじめてのGithub"],
            ['/3.初めてのプロジェクト/', "初めてのプロジェクト"],
        ],
        algolia: {
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: process.env.ALGOLIA_INDEX_NAME
        },
        repo: 'DU-scholar/github_tutorial',
        repoLabel: 'Github',
        editLinks: true,
        editLinkText: 'ページに不明点や誤字等があれば、Github にて修正を提案してください！',
    }
};
