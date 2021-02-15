---
title: gitで別のリポジトリからファイルをコピーする
created: 2021-02-04 19:29
updated: 2021-02-15 09:37
description: コピーします
author: [konnyaku]
tag: [git,computer,memo]
---

### きっかけ
ここに書いてる記事を自分のgithub.io(https://wabetarou.github.io)にも表示させたい!!

narazuke.github.io => wabetarou.github.io

### やり方
1. wabetarouのlocalリポジトリでnarazukeのremoteリポジトリを登録
```
git remote add <name> <url>
```
これでlocalにurl先のデータがくる

2. mergeする
```
git merge <name>/<branch>
```
`fatal: refusing to merge unrelated histories`というエラーは`--allow-unrelated-histories`というオプションで解決できた

### 今後
これでnarazukeのデータをwabetarouにも表示できるようにしたが、自分の記事だけをfilterして表示してもいいかも




### 参考
[Gitでプロジェクトごと別リポジトリにpush（コピー）する方法](https://chat-rate.com/it/1789/)
