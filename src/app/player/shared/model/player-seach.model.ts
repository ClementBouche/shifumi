import { Deserializable } from 'src/app/core/model/deserializable.interface';
import { Serializable } from 'src/app/core/model/serializable.interface';

export class PlayerSearch implements Deserializable, Serializable {
  // pagination
  page: number = 1;
  size: number = 20;

  // order
  order: string = 'play';

  // exact name
  strict: boolean = false;

  // search options
  name: string;
  minPlay: number;
  userId: string;

  deserialize(input: any) {
    Object.assign(this, {
      page: input.page || 1,
      size: input.size || 20,
      order: input.order || 'play',
      name: input.name,
      minPlay: input.minPlay,
      userId: input.user_id
    });
    return this;
  }

  serialize() {
    return {
      page: this.page,
      size: this.size,
      order: this.order,
      name: this.name,
      minPlay: this.minPlay,
      user_id: this.userId
    };
  }

}
