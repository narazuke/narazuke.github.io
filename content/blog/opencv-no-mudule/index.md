---
title: opencvのNotFoundeError
created: 2021-02-28T12:58
updated: 2021-03-20T01:46
description:
category: tech
tag: [error, opencv, python]
author: [konnyaku]
---

### きっかけ

パソコンを整理した結果、必要な環境まで消してしまったためまたいろいろ入れ直す。
その際に以下のエラーがでた

```
ImportError: No module named cv2
```

このエラーはよく出る気がするのでメモ

### 解決までの経過

とりあえず`brew list`で確認したらちゃんと入っていた

```
>>> brew list | grep opencv
opencv

>>> pip list | grep opencv
opencv-python                                     4.3.0.36
```

PATH を通そうと思って`./zshrc`を変えたら

```
Your PYTHONPATH points to a site-packages dir for Python 3.x but you are running Python 2.x!
```

とでてきて、python の標準バージョン変えたことを思い出した。一回戻す。

```
>>> port select --list python
Available versions for python:
	none
	python27 (active)
	python27-apple
	python38
	python38-apple
	python39

>>> sudo port select --set python python39
Password:
Selecting 'python39' for 'python' succeeded. 'python39' is now active.
```

できた。
python のパスはこれで通した

```bash:title=./zshrc
export PYTHONPATH=$PYTHONPATH:/usr/local/lib/python3.9/site-packages
```

### 参考

[MacPorts で Python のバージョンを切り替える方法](http://nakamura001.hatenablog.com/entry/20111129/1322579170)
