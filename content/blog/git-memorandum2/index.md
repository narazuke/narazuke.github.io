---
title: git備忘録2
created: 2022-11-12T23:31
updated: 2022-11-30T21:47
description: 君の忘れがちなあのコマンドが載っているかも！？ｖ
category: tech
tag: [git]
author: [nozzle]
---
## コマンド
### gitの管理対象から特定のファイルを除く
`.gitignore`に追加しただけでは、gitの管理対象からは外れないため、以下のコマンドでキャッシュを削除する必要がある。
`--cached`を付けないと、キャッシュだけでなくファイルごと削除されてしまうため注意が必要。
```bash
# ファイル指定してキャッシュ削除  
git rm --cached hoge.txt

# ディレクトリをj指定してキャッシュ削除  
git rm -r --cached hoge/
```

### 追跡を維持したままファイル名やパスを変更する
```bash
# "foo.py"というプログラムの名前を"bar.py"に変更
git mv foo.py bar.py

# "images"というディレクトリを"assets"に変更
git mv images/ assets/
```


### コミットを取り消す
```bash
// 直前のコミット操作を取り消す
git reset --soft HEAD^
```

#### 備考 resetとrevert
| コマンド | 機能                       | 用法 |
| -------- | -------------------------- | ---- |
| reset    | 取り消しても記録に残らない |      個人開発に向いている|
| revert   | 取り消したことが記録に残る |  グループのプロジェクトに向いている    |

## コミット
### コミットメッセージの極意
```
<emoji> <prefix>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
### 例
```
🐛 fix(src): 入力に負の値が入ると動作が止まるバグを修正

入力が負のとき回数をカウントできないため、結果として動作が終了する。
実行前に値をチェックする機能を追加した。
入力が負の場合、実行がキャンセルされ、エラーメッセージダイアログが表示される。
```

#### [[git備忘録#絵文字|絵文字(emoji)]]
絵文字があると視覚的にわかりやすく華やかになる
#### [[git備忘録#プレフィクス|プレフィクス(prefix)]]
プレフィクス
#### scope
変更が及ぶスコープ
#### subjectj
命令法で現在形で書く。句読点を**含めない**。最初を大文字にしない。
### body
命令法で現在形で書く。変更の動機を必ず含め、過去の仕様と対比させる。
#### footer
BREAKING CHANGEがあれば、ここに内容を付記する。なければないでよし。

## 絵文字
コミットメッセージのプレフィクスの前に絵文字を置くと視覚的に理解しやすくなる。
e.g. `✨ feat: 新機能追加`  `🐛 fix: バグ修正`

| 絵文字 | 文字コード         | prefix   | 意味                                     |
| ------ | ------------------ | -------- | ---------------------------------------- |
| 🎉     | :tada:             | feat     | 初回コミット・大きな機能追加             |
| ✨     | :sparkles:         | feat     | 新しい機能追加                           |
| 🔒     | :lock:             | feat     | セキュリティ関連の改善                   |
| 🐛     | :bug:              | fix      | バグ修正                                 |
| 📝     | :memo:             | docs     | ドキュメント修正                         |
| 👕     | :shirt:            | style    | Lintエラーの修正やコードスタイルの変更   |
| 🎨     | :art:              | style    | UIやstyleの変更                          |
| 🔨     | :hammer:          | refactor | リファクタリング                         |
| 🔥     | :fire:             | refactor | 不要な機能・使われなくなった機能の削除   |
| 🐎     | :race_horse:       | perf     | 効率改善                                 |
| ✅     | :white_check_mark: | test     | テストやCIの修正・改善                   |
| ⬆️     | :arrow_up:         | chore    | 依存パッケージなどのアップデート  | 

参考：[【必須】Gitコミットの書き方・作法【prefix/emoji】| suwaru blog](https://suwaru.tokyo/%E3%80%90%E5%BF%85%E9%A0%88%E3%80%91git%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E3%83%BB%E4%BD%9C%E6%B3%95%E3%80%90prefix-emoji%E3%80%91/)
参考：[Gitのコミットメッセージに絵文字付きプレフィックスを適用する | crient](https://crieit.net/posts/Git)
参考：[gitmoji](https://gitmoji.dev)
参考：[GitCommitEmoji.md | Github gist](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)

### プレフィクス
コミットメッセージにプレフィクスをつけると後で見やすい。

| type         | 意味                                                               |
| ------------ | ------------------------------------------------------------------ |
| **feat**     | 新機能の追加                                                       |
| **fix**      | バグや不具合の修正                                                 |
| **docs**     | ドキュメント類の追加・変更・秋雨生                                 |
| **style**    | コードの振舞いに変化を与えない可読性の変更 (空白, セミコロン など) |
| **refactor** | ソースコードの可読性を向上                                         |
| **perf**     | パフォーマンスを向上                                               |
| **test**     | テストコードの追加・修正                                           |
| **chore**    | 自動生成ツールによるファイルの変更                                 | 

参考：[Gitのコミットメッセージに絵文字付きプレフィックスを適用する | crient](https://crieit.net/posts/Git)
参考：[【今日からできる】コミットメッセージに 「プレフィックス」 をつけるだけで、開発効率が上がった話 | Qiita](https://qiita.com/numanomanu/items/45dd285b286a1f7280ed)
参考：[Developing AngularJS | Github](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type)

#### e.g.
```
fix($compile): couple of unit tests for IE9


Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

```
style($location): add couple of missing semi colons
```

```
docs(guide) : updated fixed docs from Google Docs

Couple of typos fixed:
- indentation
- batchLogbatchLog -> batchLog
- start periodic checking
- missing brace
```
引用：[AngularJS Git Commit Message Conventions | Google Docs](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y)



### コミットメッセージテンプレート
#### テンプレートを登録する
```bash
# グローバルで登録
git config --global commit.template /path/to/.commit_template
# 現在のディレクトリだけで登録
git config --local commit.template /path/to/.commit_template
```

#### マイテンプレート
```
# ==== emoji ====
# | 🎉     | :tada:             | feat     | 初回コミット・大きな機能追加             |
# | ✨     | :sparkles:         | feat     | 新しい機能追加                           |
# | 🔒     | :lock:             | feat     | セキュリティ関連の改善                   |
# | 🐛     | :bug:              | fix      | バグ修正                                 |
# | 📝     | :memo:             | docs     | ドキュメント修正                         |
# | 👕     | :shirt:            | style    | Lintエラーの修正やコードスタイルの変更   |
# | 🎨     | :art:              | style    | UIやstyleの変更                          |
# | ♻️     | :recycle:          | refactor | リファクタリング                         |
# | 🔥     | :fire:             | refactor | 不要な機能・使われなくなった機能の削除   |
# | 🐎     | :race_horse:       | perf     | 効率改善                                 |
# | ✅     | :white_check_mark: | test     | テストやCIの修正・改善                   |
# | ⬆️     | :arrow_up:         | chore    | 依存パッケージなどのアップデート         | 

# ==== prefix ====
# | feat       | 新機能の追加                                                       |
# | fix        | バグや不具合の修正                                                 |
# | docs       | ドキュメント類の追加・変更・秋雨生                                 |
# | style      | コードの振舞いに変化を与えない可読性の変更 (空白, セミコロン など) |
# | refactor   | ソースコードの可読性を向上                                         |
# | perf       | パフォーマンスを向上                                               |
# | test       | テストコードの追加・修正                                           |
# | chore      | 自動生成ツールによるファイルの変更                                 | 
```
