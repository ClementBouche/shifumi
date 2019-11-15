import { Deserializable } from 'src/app/core/model/deserializable.interface';
import { User } from 'src/app/user/shared/model/user.model';
import { Serializable } from 'src/app/core/model/serializable.interface';

export class ShifumiMessage implements Serializable, Deserializable {

  id: string;

  content: string = '';

  sender: User = new User().deserialize({ username: 'Anonymous' });

  date: string;

  room: string;

  deserialize(input: any): this {
    Object.assign(this, {
      id: input._id || input.id,
      content: input.content,
      sender: new User().deserialize({ username: input.sender }),
      date: input.date,
    })
    return this;
  }

  serialize() {
    return {
      id: this.id,
      content: this.content,
      room: this.room,
      sender: this.sender.username,
      date: this.date
    };
  }

}
