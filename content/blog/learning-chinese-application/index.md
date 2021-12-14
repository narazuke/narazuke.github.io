---
title: 中国語勉強支援ツールのアルゴリズム構想
created: 2021-11-07T20:01
updated: 2021-11-09T11:45
description: Github上に数式を載せられないのでここに載せる
category: memo
tag: [learning-chinese-application]
author: [konnyaku]
---

Github 上に数式を載せられないので代わりにここで載せる。

https://github.com/wabetarou/learning-chinese-application/

---

## 問題出現アルゴリズム

### 変数の設定

- それぞれの単語に関する情報
  - 単語情報 $i_i$
    - 登録した単語とその言語情報（漢字、拼音、和訳）を$i_i$とする
  - フェーズ $p_i \in \{0,1,2\}$
  - 正誤履歴 $h_{i1},...,h_{i5}$
    - $h_{ij} \in \{0,0.5,1\}$
    - 正誤をキューで５つ記録
  - 最終回答時刻 $t_i$
- 以上の情報によって計算される値
  - 正答率 $r_i = \frac{\sum_{1\le j \le 5}{h_{ij}}}{5}$
  - 猶予期間 $s_i = 54644 \times 1.048^{r_i \times 100}$（秒）
  - 重み $w_i$ = $max\{1000,exp(\frac{t_{now}-t_i-s_i}{s_i})\}$
    - 初期値 0.1 （初見より一度でも学習したものが優先されて出現する）
  - 出現確率 $p_i$

### 詳しい説明と具体例

- フェーズと正誤履歴について

  - 正解したらそのフェーズが記録される
  - フェーズ３を正解したら正誤履歴に記録される
  - それまでに不正解したらフェーズを戻し正誤履歴に記録
  - 例えば
    - 全問正解の場合、0 -> 1 -> 2 -> 0, 履歴に 1 追加
    - フェーズ２で不正解の場合、0 -> 1 -> 0, 履歴に 0 追加

- 猶予期間について
  - 猶予期間内はその単語は出現しない
  - 猶予期間は起動時に１日一回再計算する
  - $s_i = 54644 \times 1.048^{r_i \times 100}$（秒）
    - 0%の場合、１日
    - 20%の場合、２日
    - 40%の場合、５日
    - 60%の場合、１１日
    - 80%の場合、２７日
    - 100%の場合は別で、ある一定確率（１％）で選出する（選出後 100%の単語からランダムに出題）
- 間違えた場合、キュー追加に加えて、同じ漢字を含む他の単語に関して、半分不正解として登録
  - 連想して覚えるため
  - ただし正答率が 0.5 以下の場合は追加しない（出現率を増やすための仕様なので）
  - 例えば
    - キューが[0,0,1,1,1]だった場合[0,1,1,1,0.5]となる
    - キューが[0,0,0,0,1]だった場合[0,0,0,0,1]のまま
- 出現確率$p_i$について
  - (i) 猶予期間内の場合
    - $p_i = 0$
  - (ii) 猶予期間外の場合
    - 出現候補数を$n$とする
    - $$p_i = \begin{cases} \frac{0.01}{n} &（履歴が全て正解のとき）\\ \frac {0.99}{n}\times \frac {w_i}{\sum{w_j}} & （それ以外）\end{cases}$$
      - 正答率が 100%の場合は 1%で選出してからその中からランダムに出題
      - 単語の増加につれて正答率 100%が多くなるため別で計算
- 重み$w_i$について
  - 猶予期間を超えてから、1 から指数的に増え最大 1000 となる
  - 猶予期間が短いほど増え方が激しい
    - 正答率が低く覚えたてなので忘れる前に出現して欲しいから

---