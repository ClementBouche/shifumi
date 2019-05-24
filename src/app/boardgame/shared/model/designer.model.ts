import { Deserializable } from "src/app/core/model/deserializable.interface";

export class Designer implements Deserializable {
  id: number;
  name: String;

  deserialize(input: any) {
    Object.assign(this, {
      id: input.xmlapi_id,
      name: input.name
    });
    return this;
  }
}
