require('dotenv').config();
const { Client } = require('discord.js');
const myIntents = require('./Helpers/Intents');
const ListMethods = require('./Helpers/ListMethods');

const client = new Client({ intents: myIntents });
const listMethods = ListMethods;

client.on('ready', () => {
  console.log('oni is hunting another soul ');
});

client.on('messageCreate', message => {
  const prefix = message.content.slice(0, 1);
  let messageContent = message.content.split('-');
  messageContent = messageContent[1];
  // eslint-disable-next-line no-unused-expressions

  if (listMethods[messageContent] && prefix === '-') {
    listMethods[messageContent](message);
  }
});

client.login(process.env.BOT_KEY);
