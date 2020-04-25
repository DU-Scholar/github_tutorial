## よく使用するコマンド一覧

このページでは、知っていたら便利なコマンド、よく使うコマンド一覧を記述します。

基本的なコマンドに関する詳しい説明は[はじめてのGithub](/2.はじめてのGithub/)を参照してください。

## clone

自分のローカル上にリポジトリをダウンロードする。
```zsh
$ git clone {{リポジトリのURL}}
```

## status

自分のファイルの変更状態を取得する。
```zsh
$ git status
```
## add

gitが追跡していないファイルを追跡させる。
```zsh
$ git add {{ファイル名}}
```

## commit

commitする。
```zsh
$ git commit -m "メッセージ"
```

直前に行ったコミットを取り消したい。
```zsh
$ git reset --soft HEAD^
```

## push

変更内容をpushする。
```zsh
$ git push origin {{ブランチ名}}
```

直前に行ったpushを取り消したい。

:::warning
以下のコマンドは実行する前に担当者に確認してください。
:::

```zsh
$ git reset --hard HEAD^

$ git push -f origin {{ブランチ名}}
```

## checkout

ブランチを新しく作成して移動する。
```zsh
$ git checkout -b {{ブランチ名}}
```

ブランチを移動する
```zsh
$ git checkout {{ブランチ名}}
```

## pull

差分を取得して、ファイルの内容に反映する。
```zsh
$ git pull upstream {{ブランチ名}}
```

## fetch

差分を取得して、ファイルへの反映は行わない。
```zsh
$ git fetch
```

## branch

ブランチ一覧を確認する。
```zsh
$ git brach
```
現在いるブランチを確認する。

```zsh
$ git branch --contains
```

## init

新しくプロジェクトを作成する際、ローカルリポジトリを作成する。

（cloneしてきた場合は行う必要はありません。）
```zsh
$ git init
```

## log

ブランチに対するcommitやpushの履歴などを確認する。

```zsh
$ git log
```
