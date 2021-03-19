---
title: ximeaのnot found errorについて
created: 2021-03-02T17:59
updated: 2021-03-20T01:43
description: 対処法
category: tech
tag: [ximea, camera, mac]
author: [konnyaku]
---

### 事の発端

カメラを接続してもプログラム上では反応しない！！！
どうして！！！

みたいな感じです。

- mac
- 公式から softwareupdate して、表記に従って環境設定はした

### 解決策

アプリケーションを起動している時にはプログラムではカメラは反応しない！！！
アプリケーションを終了してからプログラムを実行すればカメラをちゃんと見つけてくれる。

色々調べたけど見つからない時は人に聞くのが一番ですね

以下調べた時にやったこと。全て徒労。

### 状況

```shell:title=shell
>>> make GST10=1
c++ streamViewer.o getnsview.o -Wl,-headerpad_max_install_names -mmacosx-version-min=10.7 -o streamViewer `pkg-config --libs gtk+-2.0 gstreamer-app-1.0 gstreamer-video-1.0` -F../../bin/OSX -framework m3api
clang: warning: libstdc++ is deprecated; move to libc++ with a minimum deployment target of OS X 10.9 [-Wdeprecated]
ld: warning: directory not found for option '-F../../bin/OSX'
ld: framework not found m3api
clang: error: linker command failed with exit code 1 (use -v to see invocation)
make: *** [streamViewer] Error 1
```

### 予想：フレームワークのインストール先の違い

software pacage に入っている Install を起動した時に ximea のための framework である m3api.framework を
入れているが、
`Installing m3api framework to /Library/Frameworks`
という表記の通り`/Library/Frameworks`に入っている。
しかし実際には`/System/Library/Frameworks`を探している。

詳しくは[Installing Your Framework](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPFrameworks/Tasks/InstallingFrameworks.html)に書いてそう

ここでの説明では`/Library/Frameworks`の次に`/System/Library/Frameworks`を探すそうだ。
`/Library/Frameworks`には確かに`m3api.framwork`が存在するが、`not found`になるのはなぜだろう。

もう少し詳しく調べてみると[Including Frameworks](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPFrameworks/Tasks/IncludingFrameworks.html#//apple_ref/doc/uid/20002257-BAJJBBHJ)に次のようなことが書いてある。

> Note: If you are not using Xcode to build your project, you must use the -framework option of GCC and ld to build and link against the specified framework. See the gcc and ld man pages for more information.

`-framework`を使う場合は Xcode を使うわけではないので、gcc か ld のページを参考にするべきだという話なので見てみる。とりあえず link とやらができてなさそう。リンクってなんぞや。

(参考)

[C/C++のビルドの仕組みとライブラリ](https://kamino.hatenablog.com/entry/c%2B%2B-principle-of-build-library)

[ライブラリのリンク方法をきっちり区別しよう](https://qiita.com/argama147/items/2f636a2f4fd76f6ce130)

- c/c++でライブラリを使う時は静的ライブラリと動的ライブラリと動的読み込みがある
- 静的ライブラリを使う時は**ヘッダファイル**と**静的リンクライブラリファイル**が必要
- \*.a や\*.lib(windows) は静的リンクライブラリファイル
- \*.dylib(so)は動的リンク、\*.bundle(so)は動的読み込み(Mac)

```shell
gcc main.c -I <mylib.hがあるディレクトリへのパス> -L <libmylib.aがあるディレクトリへのパス> -l mylib
```

- `-I`ではヘッダファイルパス、`-L`では静的リンクライブラリパス、`-l`ではライブラリの名前を入力する。

これを参考に`-framework`を使わずに include してみる。

m3api.framework の中身を調べるとちゃんと Headers と Libraries というフォルダが存在する！！

けどだめでした。`-L`がオプションとして認識されていない。というか中身も dylib で動的リンク。

dylib は動的リンクなので`-l`だけで良さそう。

だめだった。

### 解決策

`-F`で m3api が存在する`/Library/Frameworks`を指定したら error がなくなった!!!

`-F`で framework の検索パスを追加できるみたい。

(参考)[How to change framework search paths?](https://developer.apple.com/forums/thread/94661)

だけど新しいエラーがでた

```
ld: library not found for -lstdc++
```

なにこれ。

### 新しいエラーに対して

```shell:title=shell
>>> mdfind stdc++ | grep stdc++
/usr/local/Cellar/gcc/10.2.0_4/include/c++/10.2.0/x86_64-apple-darwin20/bits/stdc++.h
```

存在はする。

```bash:title=~/.zshrc
export LIBRARY_PATH=/usr/local/Cellar/gcc/10.2.0_4/include/c++/10.2.0/x86_64-apple-darwin20/bits/
```

という感じで無理矢理通そうと思ってやったけどだめだった。
これヘッダファイルだから`-I`でやるべきかも。
とおもったやったけどだめだった。/usr/local/include にコピーもしたけどだめだった。

