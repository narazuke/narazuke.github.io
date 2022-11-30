---
title: ffmpeg備忘録
created: 2022-11-03T11:59
updated: 2022-11-30T21:47
description: gifを作る方法など
category: tech
tag: [ffmpeg]
author: [nozzle]
---

## コマンド一覧
#### 動画を倍速にする
```bash
ffmpeg -i hoge.mp4 -vf setpts=PTS/2 -af atempo=2 output_fast.mp4
```
#### 動画からGIFを作る
```bash
# palette.pngを生成する
ffmpeg -i hoge.mov -vf "palettegen" -y palette.png
# paletteを使ってGIFを生成する
ffmpeg -i hoge.mov -i palette.png -lavfi "fps=12,scale=900:-1:flags=lanczos [x]; [x][1:v] paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle" -y hoge.gif
```
これでできたGIFを更に[ezgif](https://ezgif.com)というサイトで最適化すると容量が40%くらい減る。