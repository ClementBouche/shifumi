import { Deserializable } from "src/app/core/model/deserializable.interface";

export class Score implements Deserializable {
  new: boolean = false;
  winner: boolean = false;
  value: number = 0;
  playerName: string = '';

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
