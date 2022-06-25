---
title: nfcpyの実験中"ModuleNotFoundError No module named 'ndef'が出た
description: 出た
created: 2021-03-18T16:45
updated: 2021-03-18T19:53
author: [nozzle]
tag: [raspberrypi, python, trouble-shooting]
category: tech
---

## 経緯

[ラズパイにパソリを繋いで NFC タッチ！](https://jellyware.jp/kurage/raspi/nfc.html)

これを参考にしてラズパイにパソリを繋いで NFC タッチ！しようとしたのだが、

`sudo python3 examples/tagtool.py show`って打ったら、次のエラーが出た。

```bash:title=bash
Traceback (most recent call last):
  File "tagtool.py", line 29, in <module>
    import ndef
ModuleNotFoundError: No module named 'ndef'
```

また、

`sudo python examples/tagtool.py show`って打ったら、次のエラーが出る

```bash:title=bash
Traceback (most recent call last):
  File "tagtool.py", line 29, in <module>
    import cli
  File "/home/&lt;user>/.../nfcpy/examples/cli.py", line 30, in &lt;module>
    import nfc
ModuleNotFoundError: No module named 'nfc'
```

## 原因

よくわからない。python3.x 系で入手したパッケージを python2.x 系で使おうとしているため、参照先を失って出るエラーかもしれない。

pyenv で python3.x 系にしてても、sudo pip list だと python2.x の pip list が出るから、sudo python が python2.x 系で認識されちゃうのが良くないのでは？

解決法
ラズパイにパソリを繋いで NFC タッチ！(https://jellyware.jp/kurage/raspi/nfc.html)

の通り、/etc/udev/rules.d/nfcdev.rules を作るとエラーが無くなった。この工程は sudo を不要にするためのものだが、python がきちんと python3 になるようになったため、と考えて良いのだろうか。とりあえず解決した。

(Reposted from nozzlog, Written on 2020-11-10)
