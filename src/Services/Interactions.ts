import { Message } from "discord.js";
import ListMethods from "../Config/ListMethods";
import Extract from "../Utils/Extract";
import Generate from "../Utils/Generate";
import { joinVoiceChannel, getVoiceConnection, VoiceConnection } from '@discordjs/voice';

class Interactions {
    public hello(message: Message): void {
        message.reply('hi');
    }

    public invoke(message: Message): void {
        message.reply(`@everyone <@${message.author.id}>`);
    }

    public help(message: Message): void {
        let helper = '';

        new ListMethods()
            .methods()
            .map(method => {
                helper += `Comando: ${method.command} \nDescrição: ${method.description} \n\n`;
                helper += '-----------------------------------------------------\n\n';
            });

        message.reply(helper);
    }

    public sortition (message: Message): void {
        const content = Extract.contentToString(message.content);
        const index = Generate.generateARandomNumberBasedOnLength(content.length);

        message.reply(content[index]);
    }

    public join (message: Message): VoiceConnection {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.member.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        });

        return connection;
    }

    public disconnect (message: Message): void {
        const connection = getVoiceConnection(message.member.guild.id);

        if (connection) {
            connection.destroy();
        } else {
            message.reply('Any voice chat is not connected');
        }
    }
}

export default Interactions;
