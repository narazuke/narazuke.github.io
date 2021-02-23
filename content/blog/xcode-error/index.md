---
title: xcode関連のerrorについて
created: 2021-02-17T17:02
updated: 2021-02-23T10:34
description: 
category: tech
tag: [mac,xcode]
author: [konnyaku]
---


[別の記事](https://narazuke.github.io/ximea-tutorial)でMacPortsを使おうと思ったら次のようなエラーが出た

MacPortsについては[MacPortsの紹介](https://qiita.com/tenomoto/items/66614f982de96641d662)を参考にした

```bash
Warning: The macOS 11.2 SDK does not appear to be installed. Ports may not build correctly.
Warning: You can install it as part of the Xcode Command Line Tools package by running `xcode-select --install'.
```
XCodeCommandLineToolsはすでにはいっているので次のようなエラーが出る
```shell
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```
`softwareupdate --list`で更新できるか確認しても見つからず
```
Software Update Tool

Finding available software
No new software available.
```
バージョンもちゃんと最新になっている
```
>>> xcodebuild -version
Xcode 12.4
Build version 12D4e
```
どうしたもんか、、、。

Xcodeを入れ直してみる。
[Xcodeを完全にアンインストールするには関連ファイルの削除も必要](https://mykii.blog/xcode-uninstall/)
Xcode関連を全部消してから入れ直したがだめだった。

[macOS Big Sur Problems](https://trac.macports.org/wiki/BigSurProblems)に
`Command-line tools for Xcode 12.2`をdeveloperから入れろと書いてあったのでやったがだめでした。

手詰まり。

[最新版のCLTをインストール済にもかかわらず、brewに「CLTをUpdateしろ」って怒られる場合の対処法](https://qiita.com/gesutaka/items/fe34bd5de524a20b2b0a)というサイトで`brew doctor`というコマンドで同じエラーを出していたため、同じことをやってみる。`brew doctor`は`brew`関連の問題をチェックしてくれるコマンドだそう。[https://info-wcn.com/brewdoctor-warning01/](https://info-wcn.com/brewdoctor-warning01/)

これはこの記事に書く
https://narazuke.github.io/brew-doctor

結局何も変わらず。


