import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";
import { User } from 'src/app/user/shared/model/user.model';

export class TokenReponse implements Deserializable, Serializable {

  success: string;

  message: string;

  token: string;

  // user id
  user: User;

  serialize() {
    return {
      success: this.success,
      message: this.message,
      token: this.token,
      user: this.user.serialize(),
    }
  }

  deserialize(input: any) {
    const user = input.user ? new User().deserialize(input.user) : null;
    Object.assign(this, {
      success: input.success,
      message: input.message,
      token: input.token,
      user: user,
    });
    return this;
  }

}
