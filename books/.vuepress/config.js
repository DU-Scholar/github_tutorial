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
            ['/0.Githubとは/', "Githubとは"],
            ['/1.本書の構成/', "本書の構成"],
            ['/2.はじめてのGithub/', "はじめてのGithub"],
            ['/3.プロジェクトに参加したら/', "プロジェクトに参加したら"],
            ['/4.用語一覧/', "用語一覧"],
            ['/5.よく使用するコマンド一覧/', "よく使用するコマンド一覧"],
            ['/6.環境構築/', "環境構築"],
            ['/7.便利なツール/', "便利なツール"]
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
