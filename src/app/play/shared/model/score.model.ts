import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class Score implements Deserializable, Serializable {

  new: boolean = false;
  winner: boolean = false;
  value: number = 0;

  player: {
    id: string;
    name: string;
    thumbnail: string;
  }

  role: string;

  serialize() {
    return {
      new: this.new,
      win: this.winner,
      score: this.value,
      player_id: this.player.id,
      player_name: this.player.name,
      player_thumbnail: this.player.thumbnail,
    };
  }

  deserialize(input: any) {
    Object.assign(this, {
      new: input.new,
      winner: input.win,
      value: input.score,
      player: {
        id: input.player_id,
        name: input.player_name,
        thumbnail: input.player_thumbnail,
      }
    });
    return this;
  }

}
