---
title: gitのエディターをVScodeにすると失敗する
created: 2022-11-13T09:47
updated: 2022-11-30T21:47
description: トラブルシューティング
category: tech
tag: [vscode, git, troubleshooting]
author: [nozzle]
---
## 解決法
```bash
git config --global core.editor "code --wait"
```

## 解説
`--wait`を付け忘れると、git commitしたときに
```
Aborting commit due to empty message.
```
と出てgit messageを編集できなくなる。

参考：[GitのEditorをVSCodeに変更する | Qiita](https://qiita.com/takeo-asai/items/9bc7e25cd94cd8c9adee)