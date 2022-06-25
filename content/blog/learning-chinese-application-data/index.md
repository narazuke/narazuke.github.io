---
title: 中国語勉強支援ツールの流れ
created: 2021-11-08T18:23
updated: 2021-11-09T12:24
description: 起動から終了まで
category: memo
tag: [learning-chinese-application]
author: [konnyaku]
---

https://github.com/wabetarou/learning-chinese-application/

このツールを起動してから終了するまでに何をするのかの説明
問題提示の順番のアルゴリズムは以下に記載
https://narazuke.github.io/learning-chinese-application/

## 起動

単語登録か問題解答か選択する

## 単語登録

1. （手動）単語（漢字、拼音、和訳）を記入する
2. 情報を`data.json`に新しく追加する（すでにある場合は更新）
   ![](01.jpg)

## 問題解答

1. `data.json`を元に登録された`word`のインスタンスを生成する
   ![](02.jpg)
2. 生成されたインスタンスを順番付する
   ![](03.jpg)
3. UI に問題を順番に表示
4. （手動）問題に解答する
5. 結果を元にインスタンスの情報を更新
   ![](04.jpg)

## 終了

1. 新しいリストを`data.json`に反映する
   ![](05.jpg)
