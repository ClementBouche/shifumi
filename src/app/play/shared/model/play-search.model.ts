import { Deserializable } from "src/app/core/model/deserializable.interface";

export class PlaySearch implements Deserializable {

  boardgameName: String;

  userName: String;

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

}
