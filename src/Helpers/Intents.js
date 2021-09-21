const { Intents } = require('discord.js');

const myIntents = new Intents();
myIntents.add('GUILD_MESSAGES', 'DIRECT_MESSAGES', 'GUILDS');

module.exports = myIntents;
