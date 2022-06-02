import Interactions from '../Services/Interactions';
import StarWarsUser from '../Services/StarWarsUser';

class ListMethods {
  public methods () {
    return [
        {
            command: 'help',
            action: new Interactions().Help,
            description: 'Show all commands'
        },
        {
            command: 'hello',
            action: new Interactions().Hello,
            description: 'Used to debug, but Oni will say hi to u'
        },
        {
            command: 'invoke',
            action: new Interactions().Invoke,
            description: 'Call everyone to enter in voice channel ',
        },
        {
            command: 'swjoin',
            action: new StarWarsUser().join,
            description: 'Join on the Star Wars universe'
        },
        {
            command: 'sortition',
            action: new Interactions().Sortition,
            description: 'Sortition a options that has passed'
        }
    ];
  }
}

export default ListMethods;
