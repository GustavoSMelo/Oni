import { Message } from 'discord.js';
import Interactions from './Interactions';
import * as ytdl from 'ytdl-core';
import {
    createAudioPlayer,
    createAudioResource
} from '@discordjs/voice';
import Queue from '../Services/Queue/Queue';
import Cron from '../Services/Cron/Cron';

class Music {
    public async play (message: Message, queue: Queue, cron: Cron, couldPlay: boolean): Promise<void> {
        console.log('testando');
        try {
            const connection = new Interactions().join(message);

            if (connection == null) throw new Error('Error to connect to voice channel');

            const URL = message.embeds[0].url;
            const title = message.embeds[0].title;

            const validURL = await ytdl.validateURL(URL);

            if (!validURL) throw new Error(`[Command: play] -> URL invalid `);

            const ytbMusic = await ytdl(URL, { filter: 'audioonly' });
            queue.enqueue(ytbMusic);
            cron.setCronTimer(15000);

            console.log(queue);

            message.reply(`Music ${title} in Queue`);

            if (queue.lenght() <= 1 || (couldPlay && !queue.isEmpty())) {

                const audioPlayer = await createAudioPlayer();
                const resourcePlayer = await createAudioResource(await queue.getFirst());

                await audioPlayer.play(resourcePlayer);
                connection.subscribe(audioPlayer);
                message.reply(`Playing ${title}... `);

                console.log(couldPlay);

                const musicTimer = new Promise(() => setTimeout(() => queue.dequeue(), 15000));
                await musicTimer;
            } else {
                let executeNextMusic = false;
                while (executeNextMusic === false) {
                    console.log(cron);
                    await cron.decreaseBySecond();
                    executeNextMusic = cron.isZero();

                    console.log(executeNextMusic);
                }

                this.play(message, queue, cron, true);
            }
        } catch (err) {
            console.error(err);
        }
    }

    public async stop (message: Message): Promise<void> {
        try {
            const connection = new Interactions().join(message);
            connection.destroy();
        } catch (err) {
            message.reply('An error was found while trying to stop the music');
            console.error(err);
        }
    }
}

export default Music;
