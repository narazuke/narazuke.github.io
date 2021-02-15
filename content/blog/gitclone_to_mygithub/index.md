---
title: gitで別のリポジトリからファイルをコピーする
created: 2021-02-15 19:24
updated: 2021-02-15 19:37
description: コピーします
author: [konnyaku]
tag: [git, memo]
category: tech
---

### きっかけ

ここに書いてる記事を自分の github.io(https://wabetarou.github.io)にも表示させたい!!

narazuke.github.io => wabetarou.github.io

### やり方

1. wabetarou の local リポジトリで narazuke の remote リポジトリを登録

```
git remote add <name> <url>
```

これで local に url 先のデータがくる

2. merge する

```
git merge <name>/<branch>
```

`fatal: refusing to merge unrelated histories`というエラーは`--allow-unrelated-histories`というオプションで解決できた

### 今後

これで narazuke のデータを wabetarou にも表示できるようにしたが、自分の記事だけを filter して表示してもいいかも

### 参考

[Git でプロジェクトごと別リポジトリに push（コピー）する方法](https://chat-rate.com/it/1789/)
