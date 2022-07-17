---
title: CMakeとMakefileの違い
created: 2022-07-10T20:58
updated: 2022-07-17T20:13
description: c++のプログラムを一から作るときに作るやつ
category: tech
tag: [cpp, make, cmake]
author: [konnyaku]
---

## 概要

c++を久しぶりに使おうと思ったけど、一から環境作るのは久しぶりで色々忘れていました。
cmake と make の違いについて調べました。

## c++の仕組み

そもそもプログラムはコンパイラを用いる方法とインタープリターを用いる方法があります。

- コンパイラ
  - プログラムを一度実行ファイルに変換することで実行できるようにする
  - C, C++, Java
- インタープリター:はプログラムを一行ずつ読んで実行していく
  - Python, JavaScript

## Makefile

ここで関わってくるのはコンパイル方式の方です。コンパイルは例えば以下のように実行されます。

```
g++ -o main.o main.cpp
```

これを make を使うと

```
make main
```

などのように簡単に書くことができます。他にも実行ファイルの削除や Include もできます。

## CMake

C++ではいろんなライブラリやフレームワークを使うこともあります。しかし C++のコンパイラは OS に依存して複数のコンパイラが存在していて、オプションなどの仕様が異なります。そのため Makefile も OS ごとに書き換えなければいけません。それを代わりにやってくれるのが CMake です（便利！！！）。CMake をした後には実行ファイルや Makefile が作られます。ディレクトリ構造など使い方については[cmake をつかう](https://narazuke.github.io/cmake/)や[c++について詳しく](https://narazuke.github.io/cpp-directory-structure/)をご覧ください。

## 参考文献

[C/C++ソースコードのビルド：Makfile & CMake](https://www.koi.mashykom.com/cpp2.html)
