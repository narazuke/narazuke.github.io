---
title: 特定のzoomへのショートカットを作る
created: 2021-10-01T11:13
updated: 2021-10-01T12:39
description: ブラウザ経由しません
category: tech
tag: [zoom,software,windows]
author: [nozzle]
---

## 結論
### パラメータ
* **URL**: https://example.zoom.us/j/123456789?pwd=hogehoge  
* **ID**: 123456789  
* **password**: hogehoge  

### 方法

1. デスクトップ右クリック 
2. 新規作成 -> ショートカット
![](create_shortcut_file.png)  


3. 入力欄に次のように入力 (IDとpasswordは変更してください)  
    `zoommtg://zoom.us/join?action=join&confno=123456789&pwd=hogehoge`  
![](input.png)  



4. 適当に名前をつける
![](name.png)  

5. 完成
![](empty_icon.png)

---

#### アイコン直したい人  

6. 右クリック -> プロパティ  
![](property.png)  

7. アイコンの変更 -> 選択してOK
![](icon.png)  

8. 完成
![](complete.png)

## 参考
[Shortcut to Zoom | zzzzBov](https://zzzzbov.com/blag/shortcut-to-zoom)

