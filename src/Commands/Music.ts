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
    private async cronMusic (cron: Cron, queue: Queue, message: Message) {
        const response = await new Promise(() => cron.awaitForTimer());

        console.log('1');

        await Promise.all([response]);

        if (response) {
            queue.dequeue();
            if (queue.isEmpty())
                new Interactions().disconnect(message);
        }
    }

    public async play(message: Message, queue: Queue, cron: Cron, couldPlay: boolean): Promise<void> {
        try {
            const connection = new Interactions().join(message);

            if (connection == null) throw new Error('Error to connect to voice channel');

            const URL = message.embeds[0].url;
            const title = message.embeds[0].title;

            const validURL = ytdl.validateURL(URL);

            if (!validURL) throw new Error(`[Command: play] -> URL invalid `);

            const ytbMusic = ytdl(URL, { filter: 'audioonly' });

            if (!couldPlay)
                queue.enqueue(ytbMusic);

            console.log(queue);

            message.reply(`Music ${title} added in Queue`);

            if (queue.lenght() <= 1 || (couldPlay && !queue.isEmpty())) {

                const audioPlayer = createAudioPlayer();
                const resourcePlayer = createAudioResource(await queue.getFirst());

                audioPlayer.play(resourcePlayer);
                connection.subscribe(audioPlayer);

                message.reply(`Played music`);

                cron.setCronTimer(3000);

                const response = await new Promise(() => cron.awaitForTimer());
                const response2 = await Promise.all([response]);

                console.log(response);
                console.log(response2);

                console.log(queue);

                if (response) {
                    queue.dequeue();
                    if (queue.isEmpty())
                        new Interactions().disconnect(message);
                }

            } else {
                const response = await new Promise(() => cron.awaitForTimer());

                console.log('2');

                await Promise.all([response]);

                if (response) {
                    queue.dequeue();
                    if (queue.isEmpty())
                        new Interactions().disconnect(message);
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    public async stop(message: Message, queue: Queue): Promise<void> {
        try {
            const connection = new Interactions().join(message);
            connection.destroy();
            queue.clear();
        } catch (err) {
            message.reply('An error was found while trying to stop the music');
            console.error(err);
        }
    }
}

export default Music;
