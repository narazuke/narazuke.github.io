---
title: gccコンパイルオプション
created: 2022-11-03T11:59
updated: 2022-11-30T21:47
description: gccのコンパイルオプションの備忘録
category: tech
tag: [c]
author: [nozzle]
---
## 概要
gccのコンパイルオプションの備忘録。

## 早見表
早見表
|オプション|役割|備考|
|---|---|---|
|-lm|math.hのライブラリをリンクする|lはライブラリを指定,mはmath|
|-c|[[オブジェクトファイル]]を作る||
## 一覧
### -lm
#### 概要
math.hをインクルードしたオブジェクトコードを他のライブラリとリンクする際に必要なオプション。
リンカに関するオプションなので、`gcc`コマンドの後ろにつける必要がある。
#### e.g.
```c
#include <stdio.h>
#include <math.h>
int main(){
	int a=2;
	printf("%f",sqrt(a));
	return 0;
}
```

```shell
gcc -o a.out hoge.c -lm
```

オブジェクトファイルのリンクで必要になるオプションである。
```shell
gcc -o a.out hoge.o -lm
```

オブジェクトファイルの作成(ソースのコンパイル)には不要であるが、オプションをつけてもエラーは出ない。
```shell
gcc -o hoge.o -c hoge.c -lm # -lmがなくても動く
```

### -c
#### 概要
オブジェクトファイルの作成に使うオプション。

#### e.g.
```shell
gcc -o hoge.o -c hoge.c
```

`-o`をつけないと、hoge.oがオブジェクトファイルにならない。

### -g
#### 概要
コンパイル時にデバッグ情報を生成するようにする。
デバッガを使うときに有用。

