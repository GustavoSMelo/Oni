import * as dotenv from 'dotenv';
import { Client } from 'discord.js';
import myIntents from './Config/Intents';
import CommandsList from './Commands/CommandsList';
import Queue from './Services/Queue/Queue';
import Cron from './Services/Cron/Cron';
import 'reflect-metadata';

// initiate constants

dotenv.config();
const queueSupport = [];
const client = new Client({ intents: myIntents });
const commandsList = new CommandsList().methods();
const prefixEnv = process.env.PREFIX || '-';
const queue = new Queue(queueSupport);
const cronTimer = new Cron();

//events

client.on('ready', async () => {
    console.log('oni start the hunt ');
});

client.on('messageCreate', message => {
    if (message.content && message.content.length >= 2 && message.content.startsWith(prefixEnv)) {
        message.content = message.content.toLowerCase().trim();

        const prefix = message.content.slice(0, 1);

        const messageContent: string = message.content?.split(prefixEnv)[1];

        const [command, _] = messageContent?.includes(' ') ?
            messageContent.split(' ') :
            [messageContent, ''];

            commandsList.forEach(async methods => {
            if (methods.command === command && prefix === prefixEnv) {
                await methods.action(message, queue, cronTimer , queue.lenght() <= 0 ? false : true);
            }
        });
    }
});

// bot start

client.login(process.env.BOT_KEY);
