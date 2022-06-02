import { Message } from "discord.js";
import Generate from "../Utils/Generate";

class StarWarsUser {
    public join (message: Message) {
        const side = Generate.generateBetweenTwoSides('dark', 'light');
        const role = Generate.generateBetweenTwoSides('tropper', 'jedi');

        message.reply(`You are a ${role} on the ${side} side of force.`);
    }
}

export default StarWarsUser;
