import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class PlaySearch implements Deserializable, Serializable {

  boardgameName: String;

  playerName: String;

  page: number = 1;

  size: number = 20;

  byBoardgameName(input: String) {
    Object.assign(this, {
      boardgameName: input,
      page: 1,
      size: 20,
    });
    return this;
  }

  deserialize(input: any) {
    Object.assign(this, {
      boardgameName: input.boardgame,
      playerName: input.player,
      page: input.page || 1,
      size: input.size || 20,
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
