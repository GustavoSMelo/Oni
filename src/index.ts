import * as dotenv from 'dotenv';
import { Client } from 'discord.js';
import myIntents from './Config/Intents';
import ListMethods from './Config/ListMethods';
import "reflect-metadata"

// initiate constants

dotenv.config();
const client = new Client({ intents: myIntents });
const listMethods = new ListMethods().methods();
const prefixEnv = process.env.PREFIX || '-';

//events

client.on('ready', () => {
    console.log('oni is hunting another soul ');
});

client.on('messageCreate', message => {
    if (message.content && message.content.length >= 2 && message.content.startsWith(prefixEnv)) {
        message.content = message.content.toLowerCase().trim();

        const prefix = message.content.slice(0, 1);

        const messageContent: string = message.content?.split(prefixEnv)[1];

        const [command, params] = messageContent?.includes(' ') ?
            messageContent.split(' ') :
            [messageContent, ' '] ;

        console.log(messageContent);
        console.log(command);

        listMethods.map(methods => {
            if (methods.command === command && prefix === prefixEnv) {
                methods.action(message);
            }
        });
    }
});

// bot start

client.login(process.env.BOT_KEY);
