import { Message } from "discord.js";

class Interactions {
    public Hello(message: Message) {
        message.reply('hi');
    }

    public Invoke(message: Message) {
        message.reply(`@everyone <@${message.author.id}>`);
    }
}

export default Interactions;
