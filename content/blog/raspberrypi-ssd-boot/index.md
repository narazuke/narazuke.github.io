---
title: SDカードなしでRaspberry Pi 4B を SSDでUSB bootする
created: 2021-03-18T11:03
updated: 2021-03-18T17:36
tag: [raspberrypi]
author: [nozzle]
description: SSDが余っててしょうがないあなたに...
category: tech
---

## 結論

### Pros

- SD カードより SSD のほうが寿命が長い
- 書き込み性能が早い(約 2 倍)

### Cons

- USB ポートを１つ奪われる

## Youtube の受け売りです

[Stable Raspberry Pi 4 USB boot (HOW-TO)](https://www.youtube.com/watch?v=tUrX9wzhygc "Stable Raspberry Pi 4 USB boot (HOW-TO)")

## 注意

- HDD でもできるらしいけど検証してない
- SSD や SD はフォーマットされます

## SD カードで boot して update する

[Rasberry Pi Imager](https://www.raspberrypi.org/software/ "Raspberry Pi Imager")

[64bit beta 版](https://downloads.raspberrypi.org/raspios_arm64/images/ "Index of /raspiod_arm64/images")

64bit の最新版は 08-20 でした.(2020/12/05 現在)

```bash:title=bash
sudo apt update
sudo apt upgrade
sudo rpi-update
sudo reboot
```

rpi-update やろうとしたらエンジニア以外やるなって怒られた
ﾌﾝ...

## firmware track の書き換え

```bash:title=bash
sudo nano /etc/default/rpi-eerom-upgate
```

critical を stable に書き換える

```:title=/etc/default/rpi-eerom-upgate
FIRMWARE_RELEASE_STATUS="stable"
```

nano の閉じ方
ctrl+x -> y -> Enter

## bootloader のアップデート

```bash:title=bash
sudo rpi-eeprom-update -d -f /lib/firmware/raspberrypi/bootloader/stable/pieerom-hoge-ho-ge.bin
sudo reboot
```

2020/12/05 時点では sep 3 が最新でした

再起動後、`vcgencmd bootloader_version`で boot の日付が変わってたら成功

## ssd に OS を書き込んで接続

### ssd の OS イメージ作成

もう一回 Raspberry Pi Imager を使う
フォーマット後、OS に使う分だけ自動でパーティションしてくれるので便利

### ssd のマウント

```bash:title=bash
sudo mkdir /mnt/hoge
sudo mount /dev/sda1 /mnt/hoge
```

hoge はもちろんお好みの名前で
差した外付けデバイスが 2 台目なら sdb になってるかも、早々ないと思うけど

### 必要なファイルをコピーする

```bash:title=bash
sudo cp /boot/*elf /mnt/hoge
sudo cp /boot/*dat /mnt/hoge
```

お疲れ様です。終わりです

## 確認

### SD カードを抜いて再起動してみよう

立ち上がったね、いいね

### 速度を比較してみよう

参考:[dd コマンドでディスクの書き込み性能を簡易測定する](http://naoberry.com/tech/dd/ "ddコマンドでディスクの書き込み性能を簡易測定する")

```bash:title=bash
dd if=/dev/zero of=/tmp/write.tmp ibs=1M obs=1M count=1024
```

SD カード

```bash:title=bash
1024+0 records in
1024+0 records out
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 33.9586 s, 31.6 MB/s
```

SSD

```bash:title=bash
1024+0 records in
1024+0 records out
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 13.1027 s, 81.9 MB/s
```

(81.9/31.6)=2.59 倍早い

## 経緯

raspi 4B 買ったので新しいことに挑戦するなら今しかないと思ったためです

Reposted from nozzlog, Written on 2020-12-05)
