# Instructions (ENG)

## How to get variable values for .env

- go to [line developer console](https://developers.line.biz/console/)
- create a new provider
- select the new provider
- create 2 channel ( Line login , Messaging Api )
- LINE_CHANNEL_ID can be obtained from LINE Login Channel -> Basic Setting -> Channel ID
- LINE_REDIRECT_URI must be configured in LINE Login Channel -> Line Login -> Callback URL
- LINE_CHANNEL_SECRET can obtained from LINE Login Channel -> Basic Setting -> Channel secret
- LINE_CHANNEL_ACCESS_TOKEN can obtained from Messaging API Channel -> Messaging API -> Channel access token/Channel access token (long-lived) (Issue token)

## How to test

```Shell
npm i
npm start
```

- go to [localhost login](http://localhost:3000/login)
  
    

# 手順 (英語)

## .env の変数値を取得する方法

- [line developer console](https://developers.line.biz/console/) に移動します
- 新しいプロバイダーを作成します
- 新しいプロバイダーを選択します
- 2 つのチャネルを作成します (Line login、Messaging Api)
- LINE_CHANNEL_ID は、LINE ログイン チャネル -> 基本設定 -> チャネル ID から取得できます
- LINE_REDIRECT_URI は、LINE ログイン チャネル -> Line Login -> コールバック URL で設定する必要があります
- LINE_CHANNEL_SECRET は、LINE ログイン チャネル -> 基本設定 -> チャネル シークレットから取得できます
- LINE_CHANNEL_ACCESS_TOKEN は、Messaging API チャネル -> Messaging API -> チャネル アクセス トークン/チャネル アクセス トークン (長期) (発行トークン) から取得できます

## テスト方法

```Shell
npm i
npm start
```

- [localhostログイン](http://localhost:3000/login)