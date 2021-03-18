---
title: ラズパイのIPアドレスを固定する方法
created: 2021-03-18T12:09
updated: 2021-03-18T17:37
tag: [raspberrypi]
author: [nozzle]
description: ラズパイのIPアドレスを固定します
category: tech
---

```bash:title=bash
sudo vim /etc/dhcpcd.conf
```

ifconfig で得た IP アドレスやサブネットマスク長、DNS のアドレスを
dhcpcd.conf に以下のように記述

```bash:title=/etc/dhcpcd.conf
interface wlan0
static ip_address=192.168.1.hoge/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1
```

実行後

```bash:title=bash
sudo reboot
```

で再起動して`ifconfig`で IP アドレスが hoge になってたら成功

(Reposted from nozzlog, Written on 2020-12-03)
