import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";
import { LibraryItem } from './library-item.model';
import { Player } from 'src/app/player/shared/model/player.model';

export class User implements Deserializable, Serializable {

    id: string;

    username: string;

    password: String;

    email: String;

    image: String;

    surname: String;

    lastname: String;

    activated: Boolean;

    admin: boolean;

    // token
    token: string;

    idsClaimed: string[];
    playerId: string;
    player: Player;

    // library
    library: LibraryItem[];

    serialize() {
      return {
        username: this.username,
        password: this.password,
        email: this.email,
        image: this.image,
        lastname: this.lastname,
        admin: this.admin,
        activated: this.activated,
        player_id: this.player.id,
        player_ids_claimed: this.idsClaimed,
        library: this.library.map((item) => item.serialize())
      };
    }

    deserialize(input: any) {
      const library = input.library ? input.library.map((item: any) => new LibraryItem().deserialize(item)): [];
      const player = input.player ? new Player().deserialize(input.player) : null;
      Object.assign(this, {
        id: input._id,
        username: input.username,
        // password: input.password,
        email: input.email,
        image: input.image,
        surname: input.surname,
        lastname: input.lastname,
        admin: input.admin,
        activated: input.activated,
        playerId: input.player_id,
        idsClaimed: input.player_ids_claimed,
        player: player,
        library: library
      });
      return this;
    }

}
