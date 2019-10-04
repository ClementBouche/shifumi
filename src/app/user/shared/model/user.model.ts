import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";
import { LibraryItem } from './library-item.model';

export class User implements Deserializable, Serializable {

    id: string;

    username: string;

    password: String;

    email: String;

    surname: String;

    lastname: String;

    activated: Boolean;

    admin: boolean;

    // token
    token: string;

    player: {
      id: string;
      idsClaimed: string[];
    } = {
      id: null,
      idsClaimed: []
    };

    // library
    library: LibraryItem[];

    serialize() {
      return {
        username: this.username,
        password: this.password,
        email: this.email,
        surname: this.surname,
        lastname: this.lastname,
        admin: this.admin,
        activated: this.activated,
        player_id: this.player.id,
        player_ids_claimed: this.player.idsClaimed,
        library: this.library.map((item) => item.serialize())
      };
    }

    deserialize(input: any) {
      const library = input.library ? input.library.map((item: any) => new LibraryItem().deserialize(item)): [];
      Object.assign(this, {
        id: input._id,
        username: input.username,
        // password: input.password,
        email: input.email,
        surname: input.surname,
        lastname: input.lastname,
        admin: input.admin,
        activated: input.activated,
        player: {
          id: input.player_id,
          idsClaimed: input.player_ids_claimed || [],
        },
        library: library
      });
      return this;
    }

}
