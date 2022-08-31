---
title: opencvを使おうとして苦戦した話
created: 
updated: 
description: include pathやらがわからずpkg configを使ったりした
category: tech
tag: [opencv, cpp]
author: [konnyaku]
---

# 概要
c++でopencvを使おうとしてまたどつぼにはまった。opencv2/*.hppが見つからない。

# pkg-config
いつぞやにつかったpkg-configでとりあえずopencvを使えるようにする。

`g++ 'pkg-config --libs --cflags opencv' test_opencv.cpp`を行ったが`pkg-conig`が見つからないみたいなことを言われた。

`/usr/local/lib`以下に`pkg-config`を作った後以下のファイル`open.cp`を作成した。

```
prefix=/usr
exec_prefix=${prefix}
includedir=${prefix}/include
libdir=${exec_prefix}/lib

Name: opencv
Description: The opencv library
Version: 2.x.x
Cflags: -I${includedir}/opencv -I${includedir}/opencv2
Libs: -L${libdir} -lopencv_calib3d -lopencv_imgproc -lopencv_contrib -lopencv_legacy -l
```

エラーが変わり
```
ld: library not found for -lopencv_calib3d
clang: error: linker command failed with exit code 1 (use -v to see invocation)
```
となった。

結局過去の自分の記事の言う通りに従ったらできた
https://narazuke.github.io/arknights-auto/
過去の自分に感謝。こんなんよく調べたわ。

`pkg-config`を使った方法はできたがCMakeListを使った方法はうまくいっていないので下の章に続く…

# CMakeLists
上記のように過去の自分に従ったらこんなエラーが…
```
[ WARN:0@0.004] global /tmp/opencv-20220814-85292-f59axv/opencv-4.6.0/modules/imgcodecs/src/loadsave.cpp (239) findDecoder imread_('example.jpg'): can't open/read file: check file path/integrity
libc++abi: terminating with uncaught exception of type cv::Exception: OpenCV(4.6.0) /tmp/opencv-20220814-85292-f59axv/opencv-4.6.0/modules/highgui/src/window.cpp:967: error: (-215:Assertion failed) size.width>0 && size.height>0 in function 'imshow'
```
g++によるコンパイルでは実行成功までしているのでコードの問題ではないと思う。

調べてるうちにパスが間違っていることに気づいた。
実行しているのは`build`以下なので`main.cpp`と同じディレクトリに置いている`example.jpg`は`../example.jpg`と書くべきでした。
これでCMakeListでopencvを使ったコードを書けます。
