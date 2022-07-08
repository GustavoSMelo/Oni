import Interactions from './Interactions';
import Music from './Music';
import StarWarsUser from './StarWarsUser';

class CommandsList {
    public constructor (
        private interactions: Interactions = new Interactions(),
        private music: Music = new Music(),
    ) {}

    public methods () {
        return [
            {
                command: 'help',
                action: this.interactions.help,
                description: 'Show all commands'
            },
            {
                command: 'hello',
                action: this.interactions.hello,
                description: 'Used to debug, but Oni will say hi to u'
            },
            {
                command: 'invoke',
                action: this.interactions.invoke,
                description: 'Call everyone to enter in voice channel ',
            },
            {
                command: 'swjoin',
                action: new StarWarsUser().join,
                description: 'Join on the Star Wars universe'
            },
            {
                command: 'sortition',
                action: this.interactions.sortition,
                description: 'Sortition a options that has passed'
            },
            {
                command: 'join',
                action: this.interactions.join,
                description: 'Join a voice channel'
            },
            {
                command: 'disconnect',
                action: this.interactions.disconnect,
                description: 'Disconnect from voice channel'
            },
            {
                command: 'play',
                action: this.music.play,
                description: 'Play a music',
            },
            {
                command: 'stop',
                action: this.music.stop,
                description: 'Stop the music',
            }
        ];
    }
}

export default CommandsList;
