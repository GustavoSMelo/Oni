import { Message } from "discord.js";
import Interactions from "./Interactions";

class Music {
    public constructor (
        private readonly interactions: Interactions
    ) {}

    public play (message: Message) {
        this.interactions.Join();
    }
}

export default Music;
