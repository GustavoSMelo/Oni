import { Message } from 'discord.js';
import Interactions from './Interactions';
import * as ytdl from 'ytdl-core';
import {
    createAudioPlayer,
    createAudioResource
} from '@discordjs/voice';
import Queue from '../Services/Queue/Queue';
import Cron from '../Services/Cron/Cron';
// import { CronJob } from 'cron';

class Music {
    public async play (message: Message, queue: Queue, cron: Cron, couldPlay: boolean): Promise<void> {
        try {
            const connection = new Interactions().join(message);

            if (connection == null) throw new Error('Error to connect to voice channel');

            const URL = message.embeds[0].url;
            const title = message.embeds[0].title;

            const validURL = await ytdl.validateURL(URL);

            if (!validURL) throw new Error(`[Command: play] -> URL invalid `);

            const ytbMusic = ytdl(URL, { filter: 'audioonly' });

            if (!couldPlay)
                queue.enqueue(ytbMusic);

            console.log(queue);

            message.reply(`Music ${title} in Queue`);

            if (queue.lenght() <= 1 || (couldPlay && !queue.isEmpty())) {

                const audioPlayer = createAudioPlayer();
                const resourcePlayer = createAudioResource(await queue.getFirst());

                audioPlayer.play(resourcePlayer);
                connection.subscribe(audioPlayer);

                cron.setCronTimer(15000);

                await cron.awaitForTimer();
                console.log('esperei')
            } else {
                cron.isFinished();
            }
        } catch (err) {
            console.error(err);
        }
    }

    public async stop (message: Message, queue: Queue): Promise<void> {
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
