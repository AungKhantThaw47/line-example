# Instructions

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