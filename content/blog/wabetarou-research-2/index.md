---
title: 画像による位置推定システム
created: 
updated: 
description: 論文読み
category: tech
tag: [論文, 画像処理]
author: [konnyaku]
---

# PoseNet: A Convolutional Network for Real-Time 6-DOF Camera Relocalization

## Author

Alex Kendall, Matthew Grimes, Roberto Cipolla

## リンク

https://ieeexplore.ieee.org/document/7410693/footnotes#footnotes

pdfのみ：https://www.cv-foundation.org/openaccess/content_iccv_2015/papers/Kendall_PoseNet_A_Convolutional_ICCV_2015_paper.pdf

## 概要

- RGB画像からカメラの位置推定,姿勢推定をする
  - RGB-D画像でないことが重要
- 屋外2m3度,屋内0.5m5度の誤差
- 23層のCNNと転移学習
- 照明や手ブレにも強い
- 貢献
  - 大規模分類データセットを転移学習している
  - 動画の動きから自動的にカメラポーズを生成する機構

## 背景の概要（メモ）
- 大きさは224x224
- 先行研究:いくつかの場所ラベルを用意,分類 -> 姿勢推定
  - ここでは連続的またノイズに強い
- この分野ではSLAMが伝統的
- 単眼画像をポーズの変化になめらかな高次元ベクトルに変換
  - これにより画像からポーズを回帰できる
- 普通ÇNNはデータセットが多く必要
  - ImageNet, Placesなどがある。(14M, 7M)
  - これを解決するために
    - 動きからの構造を用いてデータラベル付自動化
    - 姿勢回帰モデルを転移学習

## 方法（メモ）
x = position
q = クォータニオン（四元数、quaternion）
\beta = 位置と姿勢の誤差の期待値が同じになるようにセットされる変数
損失関数 = 位置の二乗誤差 + （角度の二乗誤差） * /beta

- GoogLeNet

## 論文に関係ないメモ
- 方向と姿勢の違い
  - 方向：自由度は2。神の視点から見た方向
  - 姿勢：自由度は3。紙飛行機がどのくらい回転しているか
- quaternion
  - クォータニオン
  - 回転計算が楽になるように四次元にしている
  - https://qiita.com/drken/items/0639cf34cce14e8d58a5
  - 回転を表す他の方法
    - オイラー角（3次元）
    - 回転行列（9次元）



## 出典

Seventh International Conference on Intelligent Systems Design and Applications (ISDA 2007)