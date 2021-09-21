require('dotenv').config();
const { Client } = require('discord.js');
const myIntents = require('./Helpers/Intents');
const Interactions = require('./Model/Interactions');

const client = new Client({ intents: myIntents });
const interactions = new Interactions();

client.on('ready', () => {
  console.log('oni is hunting another soul ');
});

client.on('messageCreate', message => {
  const prefix = message.content.slice(0, 1);
  let messageContent = message.content.split('-');
  messageContent = messageContent[1];

  // eslint-disable-next-line no-unused-expressions
  console.log(prefix, messageContent);
  console.log(interactions.ListInteractionsMethod);
  const interationsList = interactions.ListInteractionsMethod;
  console.log(interationsList.bind(this).call(messageContent));

  /*
  if (interactions.ListInteractionsMethod[messageContent] && prefix === '-') {
    const executeMethod = interactions.ListInteractionsMethod.find(message.content);
    // eslint-disable-next-line no-unused-expressions
    interactions.ListInteractionsMethod[executeMethod];
  } else {
    message.reply('esse contrato não existe ');
  } */
});

client.login(process.env.BOT_KEY);
