import { Message } from "discord.js";

class Interactions {
  public Hello (message: Message) {
    message.reply('hi');
  }

  public Invoke (message: Message, ...params: any) {
    message.reply(`teste`);
  }
}

export default Interactions;
