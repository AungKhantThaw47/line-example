require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/login", (req, res) => {
    const authUrl = `${process.env.LINE_AUTH_URL}?response_type=code&client_id=${
        process.env.LINE_CHANNEL_ID
    }&redirect_uri=${encodeURIComponent(
        process.env.LINE_REDIRECT_URI
    )}&state=12345abcde&scope=profile%20openid%20email`;
    res.redirect(authUrl);
});

app.get("/callback", async (req, res) => {
    const code = req.query.code;
    const token = await getAccessToken(code);
    const profile = await getProfile(token.access_token);
    sendMessage(profile.userId, "Hello");
    res.send(profile);
});

async function getAccessToken(code) {
    const response = await fetch(process.env.LINE_TOKEN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: process.env.LINE_REDIRECT_URI,
            client_id: process.env.LINE_CHANNEL_ID,
            client_secret: process.env.LINE_CHANNEL_SECRET,
        }),
    });
    return response.json();
}

async function getProfile(accessToken) {
    const response = await fetch(process.env.LINE_PROFILE_URL, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.json();
}

async function sendMessage(userId, message) {
    const response = await fetch(process.env.LINE_PUSH_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
            to: userId,
            messages: [
                {
                    type: "text",
                    text: message,
                },
            ],
        }),
    });
    return response.json();
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});