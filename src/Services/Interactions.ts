import { Message } from "discord.js";
import ListMethods from "../Config/ListMethods";

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
}

export default Interactions;
