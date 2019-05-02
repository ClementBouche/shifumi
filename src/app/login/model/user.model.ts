import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class User implements Deserializable, Serializable {

    id: string;

    username: string;

    password: String;

    email: String;

    surname: String;

    lastname: String;

    admin: Boolean;

    // token
    token: string;

    serialize() {
      return {
        username: this.username,
        password: this.password,
        email: this.email,
        surname: this.surname,
        lastname: this.lastname,
        admin: this.admin
      }
    }

    deserialize(input: any) {
      Object.assign(this, {
        id: input._id,
        username: input.username,
        password: input.password,
        email: input.email,
        surname: input.surname,
        lastname: input.lastname,
        admin: input.admin
      });
      return this;
    }

}
