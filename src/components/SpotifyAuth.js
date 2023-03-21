import React from 'react';


const code = 'AQChxR0yl3VPQtHaN8_666XmttvNSe2qJRopJ6albrnOk1_4KeWXmdpkjSOZYnTBRYi6_bLrrR6yW6g4PdfUqfLq4GbA7sNfVp1tKfZrOxiTuA_jslsni4UNSLfys6zvd_iZwSE8uA6kSwnYCvwWhuGgAIs8U_rje25VrRq8Phw7bs-y1lr_hlJ1GO6eXEPxpG3MfnX5cm8r6fxWbu2_J1Sqoeoi';
const CLIENT_ID='34e49426ce65457b80e3a776269d2c45'
const CLIENT_SECRET='aee71ece5daf45d085f497aa0ce3f37a';


const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const client_id = '34e49426ce65457b80e3a776269d2c45'
const client_secret = 'aee71ece5daf45d085f497aa0ce3f37a';
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;



const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: URLSearchParams.toString({
            grant_type: "authorization_code",
            code:code,
            redirect_uri:'http://localhost:3000'
        }),
    });
    
    return response.json();
};