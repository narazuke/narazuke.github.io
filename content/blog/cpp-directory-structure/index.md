---
title: c++のディレクトリ構造について
created: 2022-07-17T20:11
updated: 2022-07-17T20:37
description: 静的ライブラリと実行ファイルを分ける
category: tech
tag: [cpp, cmake]
author: [konnyaku]
---

## 概要

c++を一から書くときにディレクトリ構造がわからなくなるのでメモ

## ディレクトリ構造

基本的には[cmake をつかう](https://narazuke.github.io/cmake/)でやったディレクトリ構造で OK

```
<プロジェクトディレクトリ>
|- main.cpp
|- CMakeLists.txt
|- build/
```

ですが静的ライブラリを使う場合は別のフォルダで`main.cpp`とは別にビルドしなければいけません。

```
<プロジェクトディレクトリ>
|- uftree/
   |- include/
      |- uftree.hpp
   |- src/
      |- uftree.cpp
   |- CMakeLists.txt
|- main.cpp
|- CMakeLists.txt
|- build/
```

## 実際に使ってみる

あとでやります

## まとめ

あとでかきます
