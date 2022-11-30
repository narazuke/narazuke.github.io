---
title: gitの追跡対象にしたままで大量のファイルを移動・名称変更する
created: 2022-11-13T09:09
updated: 2022-11-30T21:47
description: git mvは使うな！
category: tech
tag: [git]
author: [nozzle]
---
## 結論
`git mv`なんてやめて`mv`で全部移動させてよい。
`git add -A`で変更されたファイルをstagedにすれば、ちゃんと名称変更扱いになる。
(ファイル削除と新規ファイル追加とはならない)

## 冗長な解説
### git mvを使う (非推奨)
#### git mvとは
gitの追跡対象にしたままファイルの移動・名称変更ができるコマンド。

#### 使い方
gitの追跡対象に"foo.txt"と"hoge.txt"があるとする。

```bash
> git ls-files
foo.txt
hoge.txt
```

今、"foo.txt"を"bar.txt"に名称を変更したい。
しかし、`mv foo.txt bar.txt`とすると、foo.txtの削除とbar.txtの新規追加となってしまう。
(これらをstagedにすると名称変更扱いになるが、[[#mvを使う (推奨) |後述]]する。)

```bash
> mv foo.txt bar.txt
> git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    foo.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        bar.txt
```

そこで、`git mv`を使うと追跡対象を保ったままファイル名を変更できる。
```bash
> mv foo.txt bar.txt
> git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    foo.txt -> bar.txt
```

#### git mvの欠点
`git mv`ではワイルドカードが使えない致命的な欠点がある。

```bash
> git ls-files
foo.txt
hoge.txt
```

このような状態でカレントディレクトリの全てのtxtファイルを"dir1"というディレクトリに移動させたい。
先述のとおり`git mv`は`*` (アスタリスク)が使えないので以下のコマンドは失敗する。

```bash
## 以下のコマンドは失敗する
> mkdir dir1
> git mv *.txt ./dir1/
fatal: bad source, source=*.txt, destination=dir1/*.txt
```

そのため、`git mv`で移動する場合、移動したいファイルの数だけコマンドを実行しなければならない。

```bash
> mkdir dir1
> git mv foo.txt ./dir1/foo.txt
> git mv hoge.txt ./dir1/hoge.txt
```

これは、移動したいファイルが大量にあるときに困る。
forループでスクリプトを書くこともできるが、面倒だ。

### mvを使う (推奨)
### mvでワイルドカードを使って移動する

```bash
> git ls-files
foo.txt
hoge.txt
```

先程と同じ状況でカレントディレクトリの全てのtxtファイルを"dir1"というディレクトリに移動させたい。
`mv`は`*`を使って、複数のファイルを指定できるので以下のコマンドで移動できる。

```bash
> mkdir dir1
> mv *.txt dir1/
> ls dir1
foo.txt hoge.txt
```

この操作は、これらのファイルがunstagedな状態では、新規ファイルの追加と既存ファイルの削除として扱われてしまう。
そこで`git add -A`を実行して、変更があったファイルを全てstagedの状態にすると、きちんと名称変更として扱われる。

```bash
> git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)        
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    foo.txt
        deleted:    hoge.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        dir1/
> git add -A
> git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    foo.txt -> dir1/foo.txt
        renamed:    hoge.txt -> dir1/hoge.txt
```

参考：[Git で管理しているファイルのリネームを git mv でなく mv してしまったときにどうなるのか調べてみた | Qiita](https://qiita.com/zonkyy/items/7705844c5e255b8fa3ae)
参考：[Gitで追跡を維持してファイル名を変更する | nullpo.io](https://www.nullpo.io/2021/06/04/git-renamed/)