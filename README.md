# Cardano Price Bot

Simple bot for Discord to show Cardano Price in any currency. Powered by CoinGecko public simple price API v3.

## Prerequisites

* Visit https://discord.com/developers/applications and create a new application
* Copy the `CLIENT ID` you will need this later
* Click on `Bot` on the left sidebar and then click `Add Bot`
* On the same page, click `Copy` under `TOKEN` you will need this later
* Optional: `npm install -g eslint` and `run install -g nodemon`

## Install & Run Bot

* Clone this repository, copy `.env.example` as `.env`
* Paste your bot token into `DISCORD_BOT_TOKEN=` in `.env` file
* Install the dependencies with `npm install`
* Start the bot with `npm run dev` or `npm run start`

## Add Bot to your Discord Server

* Visit this url: https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot
* _Don't forget to replace `YOUR_CLIENT_ID` in the url
* Follow the on-screen steps to add the bot to your discord server

## Bot Usage

_Please note, the bot must be running/online to answer price queries._

* Type `!price btc` to see current Cardano ADA price in BTC
* Type `!price` to see current Cardano ADA price in GBP (default)

## Bot Demo

![Bot Demo](screenshot.jpg?raw=true "Bot Demo")
