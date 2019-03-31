import { Deserializable } from "src/app/core/model/deserializable.interface";

export class Score implements Deserializable {
  new: boolean;
  win: boolean;
  value: number;
  playerName: string;

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
