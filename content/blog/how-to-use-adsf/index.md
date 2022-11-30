---
title: asdfの使い方
created: 2022-11-10T10:41
updated: 2022-11-30T21:47
description: これ見てpyenvやめました
category: tech
tag: [asdf]
author: [nozzle]
---

## 概要
pythonやnodeなどのプログラムのバージョン管理、切り替えツール。

目的が類似するツールとしてanyenvがあるが、asdfはより軽量であると言われている。

>しかし、言語ごとにバージョン管理システムをインストールするのはめんどうだ。そこで、これらをまとめた [anyenv](https://github.com/anyenv/anyenv) というものがある。
>このツールはとても便利で、筆者も利用していたのだが、一点、致命的な弱点がある。それは、**ロードが遅い** ことだ。

引用：[まだ anyenv (\*\*env) 使ってるの？ asdf を使おう！](https://zenn.dev/noraworld/articles/replace-anyenv-with-asdf)


## 導入
```
brew install asdf
```

## 使い方
### アップデート
#### asdfのアプデ
```zsh
asdf update
```

#### プラグインのアプデ
```zsh
# 全てのプラグインのアプデ
asdf plugin-update --all

# 特定のプラグインhogeのアプデ
asdf plugin-update hoge
```

### プラグイン
#### インストール可能なプラグイン一覧
```zsh
adsf plugin list all
```
#### インストール済みのプラグイン一覧
```zsh
asdf plugin list
```
#### プラグインの追加・削除
```zsh
# 追加
asdf plugin add hoge

# 削除
asdf plugin remove hoge
```

### バージョン
#### インストール可能なバージョン一覧
```zsh
asdf list all hoge
```

#### インストール済みのバージョン一蘭
```zsh
asdf list hoge
```

#### バージョンの追加・削除
```zsh
# プラグインhogeの3.9.2を追加
asdf install hoge 3.9.2

# 削除
asdf uninstall hoge 3.9.2
```

#### バージョンの設定
```zsh
# local
asdf local hoge 3.9.2

# global
asdf local hoge 3.9.2

```