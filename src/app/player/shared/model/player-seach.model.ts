import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class PlayerSearch implements Deserializable, Serializable {
  // pagination
  page: number = 1;
  size: number = 10;

  // search name
  name: string;

  deserialize(input: any) {
    Object.assign(this, {
      page: input.page || 1,
      size: input.size || 10,
      name: input.name
    });
    return this;
  }

  serialize() {
    return {
      page: this.page,
      size: this.size,
      name: this.name
    }
  }

}
