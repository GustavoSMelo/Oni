require('dotenv').config();
const { Client } = require('discord.js');
const myIntents = require('./Helpers/Intents');
const ListMethods = require('./Helpers/ListMethods');

const client = new Client({ intents: myIntents });
const listMethods = ListMethods();

client.on('ready', () => {
  console.log('oni is hunting another soul ');
});

client.on('messageCreate', message => {
  message.content = message.content.toLowerCase();
  const prefix = message.content.slice(0, 1);
  let messageContent = message.content.split(process.env.PREFIX);
  messageContent = messageContent[1];
  let params = '';
  if (message && message.content && message?.content?.split(' ')) {
    params = message.content.split(' ')[1];
  }

  // eslint-disable-next-line no-unused-expressions
  if (listMethods[messageContent] && prefix === process.env.PREFIX) {
    params === ''
      ? listMethods[messageContent](message)
      : listMethods[messageContent](message, params);
  }
});

client.on('disconnect', message => {
  message.member.voice.channelId = null;
  message.member = null;
});

client.login(process.env.BOT_KEY);
