// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { Client } from 'discord.js';
import myIntents from './Config/Intents';
import ListMethods from './Config/ListMethods';

const client = new Client({ intents: myIntents });
const listMethods = new ListMethods().methods();

client.on('ready', () => {
  console.log('oni is hunting another soul ');
});

client.on('messageCreate', message => {
  message.content = message.content.toLowerCase();

  const prefix = message.content.slice(0, 1);
  const prefixEnv = process.env.PREFIX || '-';

  let messageContent = message.content.split(prefixEnv)[1];

  let params = '';
  if (message && message.content && message?.content?.split(' ')) {
    params = message.content.split(' ')[1];
  }

  listMethods.map(methods => {
      if(methods.command === messageContent && prefix === prefixEnv) {

        params === ''
        ? methods.action(message)
        : methods.action(message, params); // methods.action(message, params);
      }
  });
});

client.on('disconnect', message => {
  message.member.voice.channelId = null;
  message.member = null;
});

client.login(process.env.BOT_KEY);
