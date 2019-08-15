import { Serializable } from 'src/app/core/model/serializable.interface';
import { Deserializable } from 'src/app/core/model/deserializable.interface';

export class PlaceSearch implements Serializable, Deserializable {

  name: string;

  page: number = 1;

  size: number = 50;

  serialize(): any {
    return {
      name: this.name,
      page: this.page,
      size: this.size,
    };
  }

  deserialize(input: any) {
    Object.assign(this, {
      name: input.name,
      page: input.page || 1,
      size: input.size || 50,
    });
    return this;
  }

}
