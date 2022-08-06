---
title: 画像による位置推定システム
created: 2022-08-06T15:36
updated: 2022-08-06T23:44
description: 論文読み
category: tech
tag: [論文, 画像処理]
author: [konnyaku]
---

# Image-based indoor positioning system: Fast image matching using omnidirectional panoramic images

## Author

Hisato Kawaji, Koki Hatada, Toshihiko Yamasaki, Kiyoharu Aizawa

## リンク

https://www.researchgate.net/publication/229013511_Image-based_indoor_positioning_system_Fast_image_matching_using_omnidirectional_panoramic_images

## 概要

パノラマ画像による位置推定。PCA-SIFT による画像マッチングと LSH(locality sensitive hashing) による最近傍探索。2.2 秒で 90%の精度。

## 気になるところ

- 赤外線, 超音波などいろいろな方法を使って IPS を実現しているが、気になるのは mobile camera で 1-5m の精度を獲得しているところ。ちなみに WiFi は 2-100m。
- 全天球カメラを使っている
  - 500 枚ほどのパノラマ画像と 1000 枚ほどの補助画像
- (1999)"Realtime personal positioning system for a wearable computer"が最初らしい
  - 色相ヒストグラムを特徴量にしたが時間がかかる
- 最近部探索には LSH や ANN がある
- 探索後に RANSAC により外れ値を消す

## 出典

MPVA '10: Proceedings of the 1st ACM international workshop on Multimodal pervasive video analysisOctober 2010 Pages 1–4https://doi.org/10.1145/1878039.1878041

# Image-Based Indoor Localization Using Smartphone Camera

## Author

Shuang Li, Baoguo Yu, Yi Jin ,Lu Huang, Heng Zhang, and Xiaohu Liang

## リンク

https://www.hindawi.com/journals/wcmc/2021/3279059/

## 概要

- RGB 画像と深さ画像を使ってデータセット作成
- 特徴点抽出->マッチング->姿勢推定
  - 学習は deep belief network
  - 特徴点抽出は edge 検出と ORB 検出
  - 姿勢推定は perspective-n-points
- 10m 弱の部屋で 50cm 程度の誤差

## 気になるところ（ほぼメモ書き）

- deep belief network?
- parsetective-n-points algorythm
- 公開データがあるらしい
- image-based localization の手順
  1. 深度付きの画像データセット収集
     - RGB-D カメラで RGB と奥行きを取る(カメラの姿勢と三次元点群もとる)
  1. カメラ写真とデータセットとの比較
  1. 最も類似した画像に対して特徴点抽出とマッチング
     - それぞれの特徴点同士でハミング距離を計算
     - 閾値より小さい時にマッチングテントする
  1. perspective-n-points algorythm
     - 姿勢推定?
- 問題
  - オクルージョン
  - オーバーラップ
  - 影
  - 反射
- image-based localization 三種類
  - manual mark-based
    - QR コードとか同心円とかのマーク
    - 設置コストが高い
    - オクルージョンとかあると精度が下がる
      - 天井なら悪くないかも？（個人的な意見）
  - natural mark-based
    - 実際の物体を目印にする
    - コストを上げずにカバレッジを確保できる
    - 環境の変化を受けやすい
    - データセットの更新が必要
  - learning-based
    - loop-closure と pose estimation で 6dof を得るために生み出された方法
    - 学習では GPU サーバーが必要
    - 特徴は SIFT ほど有効ではなく解釈性も低い
- カメラキャリブレーションと画像補正
  - 中心に向かう方向とその垂直方向それぞれに歪みがあるのでその補正が必要
- local binary pattern
- deep belief network
  - RBM(制限ボルツマンマシン)と BP(逆伝播法)
- image preprocessing
  - canny edge detection
    - テクスチャの少ないオブジェクトにも特徴点を持たせるため
  - ORB detectiion
    - SIFT より高速
  - BLIEF description algorytm
  - FAST point detection

## 出典

Hindawi
Wireless Communications and Mobile Computing Volume 2021, Article ID 3279059, 9 pages
