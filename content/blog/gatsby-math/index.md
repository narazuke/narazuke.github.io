---
title: web 上 で tex の数学記法を使う
created: 2021-11-07T19:16
updated: 2021-11-07T21:51
description: javascript を使う
category: tech
tag: [gatsby, tex]
author: [konnyaku]
---

## 結論

gatsby のプラグインを使って数式が使えるようになりました

## 経過

javascript でできるらしかったので実験してみた

参考：[Markdown で数式を表示する一番速い方法](https://qiita.com/tomtsutom0122/items/e0ab6b6ccbd369db1aa2)

```
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/x-mathjax-config">
 MathJax.Hub.Config({
 tex2jax: {
 inlineMath: [['$', '$'] ],
 displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
 }
 });
</script>
```

これを追加するだけでいい

一応これで表示はできたがなぜかラグがある。（更新したら治る）

少し調べたら gatsby のプラグインを見つけたのでこれを使う。

"gatsby-remark-katex"

以下を gatsby-config.js に記入

```
plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-katex`,
        ]
      }
    }
  ],
```

blog-post.js に以下を記入

```
import "katex/dist/katex.min.css"
```

```md
$F = ma$
$$V = RI$$
```

$F = ma$

$$V = RI$$
