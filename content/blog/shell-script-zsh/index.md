---
title: シェルスクリプトで自作コマンドを作る
created: 2021-09-13T15:49
updated: 2021-11-07T20:16
description: 自作コマンドの補完もする
category: tech
tag: [shell, zsh]
author: [konnyaku]
---

## 背景

narazuke の日記を書くのがめんどい

<- vscode 開くのが面倒だから

-> コマンドを作ってショートカットしたい

## 何をしたか

- 自作コマンド
- 自作コマンドでの補完

## 自作コマンドの作り方

```zsh:title=zshrc
export PATH="$HOME/.command:$PATH"
```

```zsh:title=.command/mycommand
#!/bin/sh
if [ "$1" = "" ]; then
    cd ~/narazuke && code .
else
    cd ~/narazuke/"$1" && code .
fi
```

```shell:title=ターミナル
$ mycommand
```

## 自作コマンドに対する補完

```zsh:title=zshrc
autoload -Uz compinit
compinit
FPATH="$HOME/.completion:$FPATH"
autoload -Uz _mycommand
compdef _mycommand mycommand
```

```zsh:title=~/.completion/_mycommand
#compdef mycommand
function _mycommand {
    _values : 'foo' 'bar'
}
```

```shell:title=ターミナル
$ mycommand [TAB]
# 'foo'と'bar'が補完できる
```

```linux:title=~/.completion/_mycommand
#compdef mycommand
function _mycommand {
    local -a var
    var=($(ls ~/hogehoge))
    _values : ${var[@]}
}
```

```shell:title=ターミナル
$ mycommand [TAB]
# hogehoge 以下の dir 名または file 名で補完できる
```

## 結果

とても楽になりました
