---
title: markdownでtexの数学記法を使う
created: 2021-11-07T19:16
updated: 2021-11-07T19:28
description: javascriptを使う
category: tech
tag: [markdown, tex]
author: [konnyaku]
---

実験も兼ねてやってみる

参考：[Markdown で数式を表示する一番速い方法](https://qiita.com/tomtsutom0122/items/e0ab6b6ccbd369db1aa2)

```js
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

これを追加するだけでいい

```md
$F = ma$
$$V = RC$$
```

$F = ma$

$$ V = RI$$
