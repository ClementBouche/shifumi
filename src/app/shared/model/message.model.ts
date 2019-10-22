import { Deserializable } from 'src/app/core/model/deserializable.interface';

export class Message implements Deserializable {
  id: string;
  content: string = '';
  sender: string = 'Anonymous';
  room: string;

  deserialize(input: any): this {
    Object.assign(this, {
      id: input._id || input.id,
      content: input.content,
      sender: input.sender,
    })
    return this;
  }

}
