---
title: ラズパイ環境設定メモ
description: ラズパイ3B+買ったときのメモでした
created: 2021-03-18T16:45
updated: 2021-03-18T18:57
author: [nozzle]
tag: [raspberrypi, memo]
category: tech
---

## OS 再インストール

ラズパイ再起動して Shift  
Raspbian チェックしてインストールを押す。

## アップグレード

これは流石に忘れないか。  
(2021-03-18 追記)
忘れてました

```bash:title=bash
sudo apt update
sudo apt upgrade
sudo apt autoremove
```

## pi のユーザ名変更

[[Raspbian]ユーザ名変更の個人的に「正しい」と思うやり方](https://jyn.jp/raspberrypi-username-change/)

後学のためなにをやってるかメモ

```bash=title=bash
# pi でログイン

sudo useradd -M tmp # 新規ユーザ tmp を生成 -M でユーザディレクトリなし
sudo gpasswd -a tmp sudo # tmp で sudo が使えるようにする -a は add で追加を指す
sudo passwd tmp
getent passwd # 新規ユーザ tmp がいるか確認してみよう
id tmp # tmp が所属するグループに 27(sudo)があるか確認してみよう

# tmp でログイン

sudo usermod -l newpi pi # usermod -l 新名 旧名 のユーザ名変更
sudo usermod -d /home/newpi -m newpi # usermod -d でホームディレクトリを/home/pi から/home/newpi に変更 -m はデータ移行
sudo groupmod -n newpi pi 　# groupmod -n で pi グループを newpi グループに変更

#newpi でログイン
sudo userdel tmp # ユーザ tmp の削除 自分の環境では警告はなし
sudo mv /etc/sudoers.d/010_pi-nopasswd 010_pi-nopasswd.bak #pi に sudo 権限を与えるファイルを無効
```

`sudo gpasswd -a tmp sudo` の代わりに `sudo usermod -aG sudo tmp` も使える。`sudo usermod -l `新名 旧名は mv と順番が逆でややこしい。

## raspberrypi のホスト名変更

sudo raspi-config

2 Network Options → N1 Hostname から変更する

## vim

sudo apt install vim

Molokai にして先人の良い vimrc をコピペしよう。

[Vim のカラースキームを Molokai に変更する](http://pyoonn.hatenablog.com/entry/2014/10/04/225321)

[vi で矢印キーを禁止する](https://blog.goo.ne.jp/tunekawa/e/73faa8bc50506cdab4b31fa15fa82547)

## SSH 初期設定

「メニュー」＞「設定」＞「Raspberry Pi の設定」 から SSH を有効にする。

```bash:title=bash
ifconfig # 192.168.1.XXX を記憶
```

他の端末から SSH できるか確認する。

```bash:title=bash
#他端末のターミナルで操作
ssh newpi@192.168.1.XXX # パスワードを入力
exit
ssh-copy-id newpi@192.168.1.XXX # 公開鍵を authorized_key に登録
ssh newpi@192.168.1.XXX # パスワードなしで ssh できたら成功
```

## sshd_config の変更

```bash:title=bash
sudo vim /etc/ssh/sshd_config
```

### root からの SSH を禁止

```bash:title=/etc/ssh/sshd_config
PermitRootLogin no
```

### パスワード認証を禁止

```bash:title=/etc/ssh/sshd_config
PasswordAuthentication no
```

### ポート番号の変更

```bash:title=/etc/ssh/sshd_config
Port XXXXX
```

新規ポート番号は 49152 から 65535 の好きな番号にしよう。 65712 は使えない。

最後に`sudo systemctl restart ssh `で ssh を再起動する

## ターミナルを英語で運用

### en_US.utf8 を locale に入れる

[tmux で invalid LC_ALL, LC_CTYPE or LANG となる](https://toxweblog.toxbe.com/2018/09/28/tmux-invalid-lang/)

このサイト通りに設定したらできた。  
ラズパイなら raspi-config → 4 Localisatation Option → I1 Change Locale から同様の設定ができる。

### .bashrc の設定

```bash:title=/home/user/.bashrc

export LANG=en_US.utf8
```

ついでに# some more ls aliases の下の#を消して ll できるようにしておこう。

### 日本語ディレクトリを変更

[デスクトップディレクトリを英語に変更](https://blog.1q77.com/2013/06/xdg-user-dirs-update/)

```bash:title=bash
LANG=C xdg-user-dirs-update --force
```

日本語ディレクトリが文字化けして残る。ラズパイの GUI で直接消そう。

## tmux

```bash:title=bash
sudo apt install tmux
tmux
```

tmux は画面分割が便利。Ctrl+ B のあとに Shift + 2 を押すと縦分割ができる。  
Ctrl + B のあとに Shift + 5 を押すと横分割ができる。

早速横分割にして罫線がおかしいときは下のリンクを見よう

[PuTTY で tmux を使うと分割表示したときの罫線がおかしい](http://ptan.info/archives/384)

## まとめ

ラズパイからキーボードを取っ払って、机をひろく使おう。

(Reposted from nozzlog, Written on 2020-02-25)
