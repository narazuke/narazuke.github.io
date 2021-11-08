---
title: optitrack
created: 2021-08-16T16:14
updated: 2021-11-08T14:54
description:
category: tech
tag: [optitrack, cpp]
author: [konnyaku]
---

（執筆途中）

ひさしぶりにこのメモサイトを活用させたい
optitrack の使い方をメモする

### 概要

optitrack にはそれを制御するためのソフトウェアがあり、それは Windows 専用である。しかしそれをサーバー経由で外部から操作する方法がある。先輩がそれについてのコードを作ってくれているので、それを理解しよう！！という感じ。

### コードを読む前に

> Motive 自体の起動から管理する`motive_api`版の実装と、起動済みの Motive が立ち上げるサーバーを介して通信する`natnet`版の実装を置いてあります。

とのこと。natnet ってなんだ？
https://www.mocap.jp/optitrack/products/natnet-sdk/

どうやら motive を操作するためのサーバーやその辺の仕組みの名前っぽい。

とりあえずその`natnet`版を見る

### コードを読む

#### `main.cpp`
