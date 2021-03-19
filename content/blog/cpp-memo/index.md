---
title: c++のoptionについて
created: 2021-02-28T18:15
updated: 2021-03-02T17:10
description: 調べるの時間かかったので忘れないようにメモ
category: tech
tag: [cpp, include, option, mac]
author: [konnyaku]
---

このサイトに option についていろいろ載っている。

https://www.xlsoft.com/jp/products/intel/compilers/ccl/12/ug/index.htm#copts/common_content/options_ref_bk_F.htm

### F

`-F`

> インクルード・ファイルの検索パスの先頭に Framework ディレクトリーを追加します。

とのこと。

### include

`/usr/local/include/`に入ってるそうな。

`#include <*.h>`で見つからない時はここに入れればいいとおもったけど、

なぜか別の理由でうまくいかない

### framework

`-framework`でフレームワークを入れることができる。（Mac だけのようだ）

`/System/Library/Frameworks`に存在する。

### 参考

https://www.xlsoft.com/jp/products/intel/compilers/ccl/12/ug/copts/common_content/options_ref_bk_F.htm

http://docwiki.embarcadero.com/RADStudio/XE8/ja/--framework
