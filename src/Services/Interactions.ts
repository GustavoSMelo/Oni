import { Message } from "discord.js";
import ListMethods from "../Config/ListMethods";
import Extract from "../Utils/Extract";
import Generate from "../Utils/Generate";
import { joinVoiceChannel, getVoiceConnection } from '@discordjs/voice';

class Interactions {
    public Hello(message: Message) {
        message.reply('hi');
    }

    public Invoke(message: Message) {
        message.reply(`@everyone <@${message.author.id}>`);
    }

    public Help(message: Message) {
        let helper = '';

        new ListMethods()
            .methods()
            .map(method => {
                helper += `Comando: ${method.command} \nDescrição: ${method.description} \n\n`;
                helper += '-----------------------------------------------------\n\n';
            });

        message.reply(helper);
    }

    public Sortition (message: Message) {
        const content = Extract.contentToString(message.content);
        const index = Generate.generateARandomNumberBasedOnLength(content.length);

        message.reply(content[index]);
    }

    public Join (message: Message) {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.member.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }

    public Disconnect (message: Message) {
        const connection = getVoiceConnection(message.member.guild.id);

        try {
            connection.destroy();
        } catch (err) {
            message.reply('I am not in voice channel');
        }
    }
}

export default Interactions;
