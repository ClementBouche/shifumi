import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class Score implements Deserializable, Serializable {
  new: boolean = false;
  winner: boolean = false;
  value: number = 0;
  playerName: string = '';

  serialize() {
    return {
      new: this.new,
      win: this.winner,
      score: this.value,
      player_name: this.playerName
    };
  }

  deserialize(input: any) {
    Object.assign(this, {
      new: input.new,
      winner: input.win,
      value: input.score,
      playerName: input.player_name
    });
    return this;
  }

}
