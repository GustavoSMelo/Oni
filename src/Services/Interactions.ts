import { Message } from "discord.js";
import ListMethods from "../Config/ListMethods";
import Extract from "../Utils/Extract";
import Generate from "../Utils/Generate";

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
        const channel = message.member.voice.channel.joinable;
    }
}

export default Interactions;
