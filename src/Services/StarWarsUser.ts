import { Message } from "discord.js";
import UtilsGenerate from "../Utils/Generate";

class StarWarsUser {
    public join (message: Message) {
        const side = UtilsGenerate.generateBetweenTwoSides('dark', 'light');
        const role = UtilsGenerate.generateBetweenTwoSides('tropper', 'jedi');

        message.reply(`You are a ${role} on the ${side} side of force.`);
    }
}

export default StarWarsUser;
