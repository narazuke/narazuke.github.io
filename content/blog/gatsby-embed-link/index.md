---
title: gatsbyにyoutube,twitterのリンクを埋め込む
created: 2021-02-16 16:06
updated: 2021-02-16T20:39
description: gatsby-pluginの導入
tag: [gatsby]
author: [konnyaku]
category: tech
---

どちらもプラグインを入れればできる。

### youtubeのリンクを埋め込む

1. gatsby-config.jsに追記
```js:js
plugins: [      
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
      {
        resolve: "gatsby-remark-embed-youtube",
        options: {
          width: 800,
          height: 400
        }
      }
      ]
    }
  },
```
`gatsby-remark-responsive-iframe`も入れているならこちらを後に書かなければいけない。順番に実行しているからか？
```js:title=js
plugins: [
  "gatsby-remark-embed-youtube",
  "gatsby-remark-responsive-iframe"
]
```
2. プラグインをインストール
```bash:title=bash
yarn add gatsby-remark-embed-youtube
```

3. markdownでの書き方
youtubeの共有というボタンから埋め込みリンクを取得する
```md:title=md
`youtube:https://www.youtube.com/embed/u82r6NIkTbU`
```
`youtube:https://www.youtube.com/embed/u82r6NIkTbU`

### twitterのリンクを埋め込む


1. gatsby-config.jsに追記
```js:title=js
plugins: [`gatsby-plugin-twitter`]
```
2. プラグインをインストール
```shell:title=shell
npm install gatsby-plugin-twitter
```
3. markdownでの書き方
twitterの右上のボタン(v)から埋め込みリンクを取得し、そのまま書くだけ。
```md:title=md
<blockquote class="twitter-tweet"><p lang="und" dir="ltr">10:48AM <a href="https://twitter.com/hashtag/Arknights?src=hash&amp;ref_src=twsrc%5Etfw">#Arknights</a> <a href="https://twitter.com/hashtag/%E3%82%A2%E3%83%BC%E3%82%AF%E3%83%8A%E3%82%A4%E3%83%84?src=hash&amp;ref_src=twsrc%5Etfw">#アークナイツ</a> <a href="https://t.co/FZ9GqN5OlZ">pic.twitter.com/FZ9GqN5OlZ</a></p>&mdash; Kuroduki (@kurodukimajaja) <a href="https://twitter.com/kurodukimajaja/status/1358377545503174656?ref_src=twsrc%5Etfw">February 7, 2021</a></blockquote>
```
<blockquote class="twitter-tweet"><p lang="und" dir="ltr">10:48AM <a href="https://twitter.com/hashtag/Arknights?src=hash&amp;ref_src=twsrc%5Etfw">#Arknights</a> <a href="https://twitter.com/hashtag/%E3%82%A2%E3%83%BC%E3%82%AF%E3%83%8A%E3%82%A4%E3%83%84?src=hash&amp;ref_src=twsrc%5Etfw">#アークナイツ</a> <a href="https://t.co/FZ9GqN5OlZ">pic.twitter.com/FZ9GqN5OlZ</a></p>&mdash; Kuroduki (@kurodukimajaja) <a href="https://twitter.com/kurodukimajaja/status/1358377545503174656?ref_src=twsrc%5Etfw">February 7, 2021</a></blockquote>

### 参考
全部公式に書いてある。

[gatsby-remark-embed-youtube](https://www.gatsbyjs.com/plugins/gatsby-remark-embed-youtube/)

[gatsby-plugin-twitter](https://www.gatsbyjs.com/plugins/gatsby-plugin-twitter/)

