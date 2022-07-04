import { Message } from 'discord.js';
import Interactions from './Interactions';
import * as ytdl from 'ytdl-core';
import {
    createAudioPlayer,
    createAudioResource
} from '@discordjs/voice';
import Queue from '../Services/Queue/Queue';

class Music {
    public async play (message: Message, queue: Queue): Promise<void> {
        try {
            const connection = new Interactions().join(message);

            if (connection == null) throw new Error('Error to connect to voice channel');

            const URL = message.embeds[0].url;
            const validURL = await ytdl.validateURL(URL);

            console.log(URL);

            if (validURL) {
                const ytbMusic = await ytdl(URL, { filter: 'audioonly' });
                queue.enqueue(ytbMusic);

                message.reply('Music added in Queue');

                const audioPlayer = await createAudioPlayer();
                const resourcePlayer = await createAudioResource(await queue.getFirst());
                const timer = queue.lenght() > 1 ? 10000 : 0

                setTimeout(async () => {
                    await audioPlayer.play(resourcePlayer);
                    connection.subscribe(audioPlayer);
                }, timer);

                message.reply(`Playing ${message.embeds[0].title}... `);

            } else {
                message.reply('Invalid URL');
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
