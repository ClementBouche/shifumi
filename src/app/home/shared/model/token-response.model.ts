import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class TokenReponse implements Deserializable, Serializable {

  success: string;

  message: string;

  token: string;

  // user id
  id: string;
  username: string;

  serialize() {
    return {
      success: this.success,
      message: this.message,
      token: this.token,
      id: this.id,
      username: this.username
    }
  }

  deserialize(input: any) {
    Object.assign(this, {
      success: input.success,
      message: input.message,
      token: input.token,
      id: input.id,
      username: input.username
    });
    return this;
  }

}
