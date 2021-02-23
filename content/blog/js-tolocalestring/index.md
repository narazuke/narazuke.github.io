---
title: JavaScriptのtoLocaleStringについて
created: 2021-02-18T11:17
updated: 2021-02-23T21:27
description: あまりまとまっていなかったのでメモ
tag: [js]
author: [konnyaku, nozzle]
category: tech
---

JavaScript で Date 型を String に変える際に format を指定できる。

```js
let today = new Date()
today.toLocaleString(locales, options)
```

### locales

地域に基づく表示形式になる

- 'de-DE'
- 'ja-JP'
- 'en-IN'
  など

[ロケール ID (LCID) の一覧](<https://docs.microsoft.com/ja-jp/previous-versions/windows/scripting/cc392381(v=msdn.10)?redirectedfrom=MSDN>)

### options

連想配列で指定

```js
{
    hour12:[true,false],
    era:["narrow","short","long"],
    year:["numeric","2-digit"],
    month:["numeric","2-digit","narrow","short","long"],
    day:["numeric","2-digit"],
    weekday:["narrow","short","long"],
    hour:["numeric","2-digit"],
    minute:["numeric","2-digit"],
    second:["numeric","2-digit"],
    timeZoneName:["short","long"]
    timeZone:["foo/bar"]
}
```

timeZone は日本なら"Asia/Tokyo"という表記方法。
一覧が Wikipedia に載っている。

[List of tz database time zones | Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

### 参考

[★JavaScript リファレンス](http://www.htmq.com/js/date_toLocaleString.shtml)
