import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class Score implements Deserializable, Serializable {

  player: {
    id: string;
    name: string;
  }

  value: number;
  winner: boolean = false;
  new: boolean = false;

  role: string;
  team: string;

  serialize() {
    return {
      player_id: this.player.id,
      player_name: this.player.name,
      score: this.value,
      win: this.winner,
      new: this.new,
      role: this.role,
      team: this.team,
    };
  }

  deserialize(input: any) {
    Object.assign(this, {
      player: {
        id: input.player_id,
        name: input.player_name,
      },
      value: input.score,
      winner: input.win,
      new: input.new,
      role: input.role,
      team: input.team,
    });
    return this;
  }

}
