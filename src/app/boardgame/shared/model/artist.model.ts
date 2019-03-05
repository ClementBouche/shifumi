import { Deserializable } from "src/app/core/model/deserializable.interface";

export class Artist implements Deserializable {
  id: number;
  name: string;

  deserialize(input: any) {
    Object.assign(this, {
      id: input.xmlapi_id,
      name: input.name
    });
    return this;
  }
}
