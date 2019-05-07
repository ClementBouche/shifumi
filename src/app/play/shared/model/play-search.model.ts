import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class PlaySearch implements Deserializable, Serializable {

  boardgameName: String;

  playerName: String;

  page: number = 1;

  size: number = 10;

  deserialize(input: any) {
    Object.assign(this, {
      boardgameName: input.boardgame_name,
      userName: input.user_name,
      page: input.page || 1,
      size: input.size || 10,
    });
    return this;
  }

  serialize() {
    return {
      boardgame: this.boardgameName,
      player: this.playerName,
      page: this.page,
      size: this.size
    };
  }

}
