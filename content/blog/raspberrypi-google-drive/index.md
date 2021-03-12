---
title: ラズパイでGoogle Driveを使う
created: 2021-03-11T21:17
updated: 2021-03-12T18:18
tag: [raspberrypi]
author: [nozzle]
description: Rclone を systemd で自動起動してマウントするのが良い。
category: tech
---

## 結論

Rclone を systemd で自動起動してマウントするのが良い。  
だから、google-drive-ocamlfuse とか rc.local の記事は見なくていいよ。

## まとめ

### google-drive-ocamlfuse

- マウントする
- GoogleDrive 内のファイルを直接操作できる
- ストレージ要らず
- インターネットによるネットワーク接続で操作が重い
- ラズパイが熱を持つ

### Rclone

- 同期する
- **マウントもできる**
- 片方向の同期しかできない
- ストレージを圧迫する
- 操作が軽い

## google-drive-ocamlfuse

### 公式

[Installation | google-drive-ocamlfuse](https://github.com/astrada/google-drive-ocamlfuse/wiki/Installation)

### インストール

```bash:title=bash
sudo add-apt-repository ppa:alessandro-strada/ppa
sudo apt update
sudo apt install google-drive-ocamlfuse
```

でも ppa の参照先増やしたくないねって人は

```bash:title=bash
sudo apt upgrade
sudo apt install opam mccs
opam init --solver=mccs
opam update
opam install depext
opam depext google-drive-ocamlfuse
opam install google-drive-ocamlfuse
```

ってやれば`opam`経由でインストールできる。

参考：[SSH 接続の Raspberry Pi に Google Drive をマウントする | Qiita](https://qiita.com/teamhimeH/items/9910d648da0a9ff09946)

### 認証

```bash:title=bash
google-drive-ocamlfuse
```

って出たらブラウザが立ち上がって認証トークンがでてできる。

SSH 接続でやりたい人は上の参考記事を参照するとできる。  
偽のブラウザ作ってブラウザの表示をターミナルに出すっていう発想がすごいよね。

### マウントする

```bash:title=title
google-drive-ocamlfuse [マウントしたいフォルダ]
~/.opam/default/bin/google-drive-ocamlfuse [マウントしたいフォルダ]     # opam経由でインストールした人
```

これやったらラズパイが 52℃ くらいになってびっくりしました。

## Rclone

### 公式

[Rclone Downloads v1.54.1 | Rclone](https://rclone.org/downloads/)

### インストール

```bash:title=bash
curl https://rclone.org/install.sh | sudo bash
```

### 認証

Google Drive についての Rclone 公式の説明  
[Google Drive | Rclone](https://rclone.org/drive/)

```
rclone config
```

基本指示にしたがえばできる。  
client_id, client_secret, root_folder_id, service_account_file は空欄でいい。  
Auto config の設定もしなくていいし、team drive の設定もしなくていい。

URL にアクセスして、出てきた認証コードをターミナルに打ち込むとできる。

### 使い方

**ミスるとデータが消えるから注意が必要**

#### 基本

```bash:title=bash
rclone sync [同期元] [同期先] --dry-run     # 同期は行わずに、実行時に起きるファイル操作を確認する
rclone sync [同期元] [同期先]               # 同期を行う
```

もし、rclone に`gdrive-remote`と登録してて、ラズパイ上の`./gdrive-local`っていうフォルダに同期させたいなら、`rclone sync gdrive-remote: ./gdrive-local`でできる。

#### オプション

```bash:title=bash
rclone sync [同期元] [同期先]
```

#### マウント(実験的機能)

```bash:title=bash
rclone mount [同期元] [同期先]                          # これでいい
rclone --vfs-cache-mode writes mount [同期元] [同期先]  # こっちはエラーが減るらしいけど試してない
```

マウントもできた。

## 自動マウント設定

### 結論

rc.local ではなく、systemd を使おう。

### rc.local

`~/etc/rc.local`というファイルにコマンドを書き込むと、起動時に実行してくれる。

```bash:title=/etc/rc.local
[任意のコマンド]
```

しかし、コマンドの実行者が管理者になってしまうところは留意しなくてはならない。

rclone の場合、mount を実行した人が管理者なら、マウントしたディレクトリも全部管理者のものになってしまい、ファイルを参照できなくなってしまう。

おまけに一部の OS では非推奨らしい。

> RedHat、CentOS 7 系より rc.local を利用しないことが推奨されている

引用元：[【Linux】【rc.local】Linux OS 起動時に自動的に実行する設定を入れる | 100%レンタルサーバーを使いこなすサイト](https://go-journey.club/archives/11506)

### systemd

hogehoge.service というファイルを作って systemd に管理してもらう。

#### マウントするスクリプトを作る

```bash:title=/home/[user]/shellscript/hoge.sh
#!/bin/bash
rclone mount [同期元のフォルダ] [同期先のフォルダ]
```

#### rclone のコンフィグファイルの権限を変更する

```bash:title=bash
sudo chmod 755 ~/.config/rclone/rclone.config
```

#### service ファイルを作る。

ディレクトリを間違えて`etc/systemd/hogehoge.service`としないように注意。(1 敗)

```bash:title=/etc/systemd/system/hogehoge.service
[Unit]
Description=To mount Google Drive
After=network.target                # ネットワーク接続後に実行する

[Service]
ExecStart=/home/[user]/shellscript/hoge.sh
Type=simple
User=[ユーザ名]

[Install]
WantedBy=multi-user.target
```

[Service]のユーザオプションのおかげでちゃんと一般ユーザ権限のディレクトリとしてマウントできる。

#### 自動起動の設定

```bash:title=bash
sudo systemctl daemon-reload            # serviceファイルを読み込む
sudo systemctl status hogehoge.service  # hogehoge.serviceが読み込まれたか確認する
sudo systemctl enable hogehoge.service  # hogehoge.serviceを起動時に実行するようにする
sudo systemctl disable hogehoge.service # 起動しないようにする(メモ)
```

#### マウントしたディレクトリを確認

`df -h`すればいい  
参考：[Linux のファイルシステムコマンドまとめ | NARAZUKE ](https://narazuke.github.io/linux-command-filesystem/)

![](./raspberrypi-google-drive_01.png)

できました。
