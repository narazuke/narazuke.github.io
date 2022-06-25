---
title: gatsbyのimageについて
created: 2021-02-09 23:30
updated: 2021-02-15T18:02
description: デフォルトの画像タグを変更する
author: [konnyaku]
tag: [gatsby]
category: tech
---

### きっかけ

markdown に画像をアップロードしても自由にクラスを指定できず細かい設定ができない!!!

### 解決策

markdown の情報を画像に render しているのはどうやらこの二つのプラグインのようだ。

- `gatsby-remark-images`
- `gatsby-plugin-sharp`

そのうち実際に html のコードに変換しているプラグインを見つける。gatsby のいいところは画像を自動で最適化してくれるところらしいが、このプラグインで最適化をしていそうだ。

`gatsby-plugin-sharp`では`gatsby-config.js`で設定したものを元に`<img>`タグにパラメータを返す。このプラグインが最適化をしている。

`gatsby-remark-images`では`![]()`のコードを読み込んで render してくれている。なのでこっちを書き換えれば、クラスを指定することができそうだ。

調べてみると`wrapperStyle`という option があり、そこで style の指定ができる。これを追加すれば、class を指定せずに済みそうだ。
