import Interactions from '../Services/Interactions';
import Music from '../Services/Music';
import StarWarsUser from '../Services/StarWarsUser';

class ListMethods {
  public methods () {
    return [
        {
            command: 'help',
            action: new Interactions().help,
            description: 'Show all commands'
        },
        {
            command: 'hello',
            action: new Interactions().hello,
            description: 'Used to debug, but Oni will say hi to u'
        },
        {
            command: 'invoke',
            action: new Interactions().invoke,
            description: 'Call everyone to enter in voice channel ',
        },
        {
            command: 'swjoin',
            action: new StarWarsUser().join,
            description: 'Join on the Star Wars universe'
        },
        {
            command: 'sortition',
            action: new Interactions().sortition,
            description: 'Sortition a options that has passed'
        },
        {
            command: 'join',
            action: new Interactions().join,
            description: 'Join a voice channel'
        },
        {
            command: 'disconnect',
            action: new Interactions().disconnect,
            description: 'Disconnect from voice channel'
        },
        {
            command: 'play',
            action: new Music().play,
            description: 'Play a song',
        }
    ];
  }
}

export default ListMethods;
