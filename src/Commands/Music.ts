import { Message } from 'discord.js';
import Interactions from './Interactions';
import * as ytdl from 'ytdl-core';
import {
    createAudioPlayer,
    createAudioResource
} from '@discordjs/voice';
import Queue from '../Services/Queue/Queue';

class Music {
    public async play (message: Message): Promise<void> {
        try {
            console.log(message);

            const queue = new Queue();
            const connection = new Interactions().join(message);
            const URL = message.embeds[0].url;
            const validURL = ytdl.validateURL(URL);

            console.log(URL);

            if (validURL) {
                const ytbMusic = ytdl(URL, { filter: 'audioonly' });
                queue.enqueue(ytbMusic);

                message.reply('Music added in Queue');

                const audioPlayer = createAudioPlayer();
                const resourcePlayer = createAudioResource(await queue.dequeue());

                await audioPlayer.play(resourcePlayer);
                connection.subscribe(audioPlayer);
                message.reply('Music playing');

            } else {
                message.reply('Invalid URL');
            }
        } catch (err) {
            message.reply('An error was founded while trying to play the music');
            console.error(err);
        }
    }

    public async stop (message: Message): Promise<void> {
        try {
            const connection = new Interactions().join(message);
            connection.destroy();
        } catch (err) {
            message.reply('An error was founded while trying to stop the music');
            console.error(err);
        }
    }
}

export default Music;
