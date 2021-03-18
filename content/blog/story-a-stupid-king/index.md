---
title: 【童話】まぬけな王様
created: 2021-03-18T13:46
updated: 2021-03-18T19:54
tag: [linux]
author: [nozzle]
description: おはなし
category: tech
---

## 子供向け

王様は、国民に向かってこう言いました。  
「よく聞け、ワシは王様ではない。」  
国民は王様の命令を守りました。

続けて、こう言いました。  
「よく聞け、ワシが王様である。」  
国民はひげをたくわえた怪しいおじいさんの言うことなんか見向きもしませんでした。

たった一人の王様がいなくなってしまったため、その国は滅びました。

おしまい

## Linux 向け

```bash:title=bash
king@nation:~$ sudo usermod -G people king
king@nation:~$ sudo usermod -G sudo king
king is not in the sudoers file.  This incident will be reported.
king@nation:~$ visudo
king is not in the sudoers file.  This incident will be reported.
```

## やるべきだったコマンド

```bash:title
king@nation:~$ sudo usermod -aG people king #引数にaを入れると既存のグループに追加してくれる
```

## 解決法

ありません  
root のパスワードすら設定してなかったので OS から再インストールすることになりました。絶滅

(Reposted from nozzlog, Written on 2020-02-25.)
