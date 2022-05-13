import { Message } from 'discord.js';
import Interactions from '../Services/Interactions';

class ListMethods {
  public methods () {
    return [
        {
            command: 'hello',
            action: new Interactions().Hello,
            description: 'Used to debug, but Oni will say hi to u'
        },
        {
            command: 'invoke',
            action: new Interactions().Invoke,
            description: 'Call everyone to enter in voice channel ',
        }
    ];
  }

}

export default ListMethods;
