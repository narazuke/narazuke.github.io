---
title: sshの鍵を一発で送る方法
created: 2021-03-18T12:09
updated: 2021-03-18T19:54
tag: [ssh]
author: [nozzle]
description: sshの鍵を一発で送る方法です
category: tech
---

```bash
ssh-copy-id -i [鍵の場所] -p [ポート番号] hoge@hogehoge
```

.ssh/authorizedkeys に登録されたら OK

(Reposted from nozzlog, Written on 2020-12-03)
