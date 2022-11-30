---
title: Macで充電電圧を表示する
created: 2022-11-30T21:05
updated: 2022-11-30T21:06
description: 充電器が最高のパフォーマンスをしているか確認できる
category: tech
tag: [mac]
author: [nozzle]
---
## 方法1
リンゴアイコン->このMacについて->システムレポート->電源
の下の方にワット数が書いてある
![](20221130132041.png)

## 方法2
terminalで、`system_profiler SPPowerDataType | grep Wattage`を実行
```
$ system_profiler SPPowerDataType | grep Wattage
      Wattage (W): 30
```