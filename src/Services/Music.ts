import { Message } from "discord.js";
import Interactions from "./Interactions";
import ytdl = require("ytdl-core");
import {
    createAudioPlayer,
    createAudioResource
} from "@discordjs/voice";

class Music {
    public async play (message: Message): Promise<void> {
        try {
            const connection = new Interactions().join(message);
            const URL = message.embeds[0].url;

            ytdl.validateURL(URL);
            const ytbMusic = ytdl(URL, { filter: "audioonly" });

            const audioPlayer = createAudioPlayer();
            const resourcePlayer = createAudioResource(ytbMusic);

            await audioPlayer.play(resourcePlayer);
            connection.subscribe(audioPlayer);
        } catch (err) {
            message.reply('An error was founded while trying to play the music');
            console.error(err);
        }
    }

    public async stop (message): Promise<void> {
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
