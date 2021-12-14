---
title: COCO datasetの使い方
created: 2021-09-17T18:14
updated: 2021-11-08T14:53
description: 姿勢推定のやつ
category: tech
tag: [dataset, pose-estimation, cv]
author: [konnyaku]
---

(執筆途中)

## 概要

ある画像から人物を検出しその姿勢を推定することを"pose estimation"というが（そのまま）、
世の中にはこれに関するデータセットがいろいろある。
このうち"COCO"というのを使ってみる。

## 前準備

dataset 自体は公式サイトに置いてある。

- train2017
- val2017
- annotations2017

ここでは以上の三つを使うのでダウンロードする。以下のような階層構造にしておく

```
dataset_coco
   |---annotations
         |---person_keypoints_train2017.json
         |---person_keypoints_val2017.json
   |---train2017
         |---*.jpg
   |---val2017
         |---*.jpg
```

この dataset を使いやすいデータにしてくれる COCOAPI なるものが github に存在する。
https://github.com/cocodataset/cocoapi

これを gitclone して使う。

## 構造の説明

### ロード

アノテーションのデータをロード

```python
from pycocotools.coco import COCO

train_annot_path = '../dataset_coco/annotations/person_keypoints_train2017.json'
val_annot_path = '../dataset_coco/annotations/person_keypoints_val2017.json'
train_coco = COCO(train_annot_path) # load annotations for training set
val_coco = COCO(val_annot_path) # load annotations for validation set
```

### get_meta

coco からメタデータを取得する。
yield は全てのデータを確保せず一回ずつ返す。

```python
def get_meta(coco):
    ids = list(coco.imgs.keys())
    for i, img_id in enumerate(ids):
        img_meta = coco.imgs[img_id]
        ann_ids = coco.getAnnIds(imgIds=img_id)
        # basic parameters of an image
        img_file_name = img_meta['file_name']
        w = img_meta['width']
        h = img_meta['height']
        # retrieve metadata for all persons in the current image
        anns = coco.loadAnns(ann_ids)

        yield [img_id, img_file_name, w, h, anns]
```
