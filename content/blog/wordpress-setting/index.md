---
title: WordPress設定備忘録
created: 2021-03-18T12:09
updated: 2021-03-18T18:33
tag: [raspberrypi, linux]
author: [nozzle]
description: このサイトはWordPressではないです
category: tech
---

## wordpress を動かす環境構築

```
sudo apt -y install apache2 php php-mysql php-curl php-gd php-xml mysql-server
```

<figure class="wp-block-table"><table class=""><tbody><tr><td>apache2</td><td>webサーバ</td></tr><tr><td>php</td><td>webサーバで動くスクリプト言語、wordpressはこれで作ってるらしい</td></tr><tr><td>php-mysql</td><td>PHP用のMySQL module</td></tr><tr><td>php-curl</td><td>PHP用のCURL module</td></tr><tr><td>php-gd</td><td>PHP用のGD module</td></tr><tr><td>php-xml</td><td>PHP用のDOM, Simple XML, WDDX, XML, XSL module</td></tr><tr><td>mysql-server</td><td>mysqlのサーバ</td></tr><tr><td>???</td><td>あとなんか入れた気がする......</td></tr></tbody></table></figure>

```
sudo dpkg -l | grep php
```

ってやって出てきた説明をコピペしただけです。詳しいことは僕が詳しくなったら分かるんじゃない。

## mysql で wordpress の database を作る

`sudo mysql # mysqlの起動`

ここからは mysql 上の処理になる。最後のセミコロンを忘れずに。

```
CREATE DATABASE wordpress;
GRANT ALL PRIVILEGES ON wordpress.* TO 'username'@'localhost' IDENTIFIED BY 'password';
exit;
```

localhost はそのままで、username と password は自分の好きなものを登録しよう。これはデータベースのユーザで wordpress のユーザとは別。

参考：[Mysql 関係の備忘録](https://qiita.com/ritukiii/items/afdc91e68d0cf3e0f383)

## wordpress のインストール

```
wget https://ja.wordpress.org.latest-ja.tar.gz
tar xvf latest-ja.tar.gz
sudo mv wordpress /var/www/html/
sudo chown -R www-data:www-data /var/www/html/wordpress/
```

mv は cp とかと違って -r とかつけなくてもディレクトリを移動できる。chown の -R は大文字。

tar のコマンドってなんか左下周辺のキーを 3-4 つ押すって覚えてる。そんなことでいいのか？

参考：[tar のオプションをまとめる](https://qiita.com/astro_super_nova/items/e7ff4ef5ec9fa253fd61)

x!v!f! 展開！一覧表示！ファイル名指定！

## wordpress に静的 URL でアクセス可能にする

### wordpress.conf の生成

[Apache の mod_rewrite モジュールの使い方を徹底的に解説](https://oxynotes.com/?p=7392)

ページにすっきりした URL を使えるようにする。上のサイトが分かりやすかった。このサイト自身のページが?p=7392 みたいな URL になっているのが気になる。

```
sudo vim /etc/apache2/conf-available/wordpress.conf
```

wordpress.conf の中身は下のようにしよう。

```bash:title=/etc/apache2/conf-available/wordpress.conf
<Directory /var/www/html/wordpress>
    AllowOverride All
</Directory>
```

### conf の有効化

```
sudo a2enconf wordpress
sudo a2enmod rewrite
sudo systemctl restart apache2
```

参考：[Ubuntu の Apache 設定ファイル、どうやるんだっけ？](https://qiita.com/diconran/items/1eca0e0792f4ce1930c5)

`/etc/apache2/conf-available/wordpress.conf`へのシンボリックリンクを`/etc/apache2/conf-enabled`に作成。

`/etc/apache2/mods-available/rewrite.load`へのシンボリックリンクを`/etc/apache2/mods-enabled`に作成。

そして再起動。

## ブラウザ操作

ブラウザの URL に ifconfig で出てきたプライベートアドレスを打って最後に"/wordpress/"をつけてアクセスする。

e.g. http://192.168.1.XXX/wordpress/

データベースに接続するための情報を入力。mysql の操作で作成したユーザ名とパスワードだけ入力、他の欄は変えない。

接続が済んだらブログ名とか wordress のユーザ名とかの項目の内容を入力する。これらは後に変更が可能。

## 最大アップロードサイズを変更

```
sudo vim /etc/php/7.0/apache2/php.ini
```

```bash:title=/etc/php/7.0/apache2.php.ini
upload_max_size =2M  →  upload_max_size=10M
post_max_size=8M  → post_max_size=10M
memory_limit =128M → memory_limit=512M
```

この方法で php インストールすると PHP の 7.0 になってしまうことに気づきました。良くない。raspbian だと add-apt-repository が使えないらしく ppa の公開鍵を/etc/apt/sources.list.d に登録しなきゃいけないらしい。

参考：[Raspbian に Ubuntu 用の PPA を追加する](https://qiita.com/hnw/items/734f82bee26a40269c1b)

## まとめ

docker でババッとやるのが楽かもしれない。でも docker の使い方わからないし、こういう地道な作業も勉強になるので勘弁してほしい。

(Reposted from nozzlog, Written on 2020-02-26)
