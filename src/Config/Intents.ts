import { Intents } from 'discord.js';

const myIntents = new Intents();
myIntents.add('GUILD_MESSAGES', 'DIRECT_MESSAGES', 'GUILDS');

export default myIntents;
