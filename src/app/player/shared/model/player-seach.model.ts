import { Deserializable } from "src/app/core/model/deserializable.interface";

export class PlayerSearch implements Deserializable {
  // pagination
  page: number = 1;
  size: number = 10;

  deserialize(input: any) {
    Object.assign(this, {
      page: input.page || 1,
      size: input.size || 10,
    });
    return this;
  }

}
