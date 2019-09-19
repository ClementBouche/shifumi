import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class LibraryItem implements Deserializable, Serializable {

  boardgame: {
    id: string;
    name: string;
  };

  state: string;

  rating: number;

  serialize() {
    return {
      boardgame_id: this.boardgame.id,
      boardgame_name: this.boardgame.name,
      state: this.state,
      rating: this.rating,
    };
  }

  deserialize(input: any) {
    Object.assign(this, {
      boardgame: {
        id: input.boardgame_id,
        name: input.boardgame_name,
      },
      state: input.state,
      rating: input.rating,
    });
    return this;
  }

}
