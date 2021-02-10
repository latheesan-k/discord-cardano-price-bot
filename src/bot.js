require('dotenv').config();
const { Client } = require('discord.js');
const axios = require('axios').default;

const client = new Client();
const CMD_PREFIX = '!';

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(CMD_PREFIX)) {
    const [CMD_NAME, ...CMD_ARGS] = message.content
      .trim()
      .substring(CMD_PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME === 'price') {
      const pricePair = (CMD_ARGS.length > 0 && typeof CMD_ARGS[0] !== 'undefined' ? CMD_ARGS[0].trim().toLowerCase() : 'gbp');
      axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=${pricePair}`)
        .then((response) => {
          const priceValue = (response.data.cardano[pricePair] ?? null);
          if (priceValue !== null) {
            message.reply(`1 ADA price is **${priceValue}** ${pricePair.toUpperCase()}`);
          } else {
            message.reply(`:face_with_raised_eyebrow: **${pricePair}** is not a valid option, try btc for example`);
          }
        })
        .catch((error) => {
          message.reply(':sweat_smile: Sorry server is down, try again later ...');
          console.error(error);
        });
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
