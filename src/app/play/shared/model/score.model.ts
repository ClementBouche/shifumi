import { Deserializable } from "src/app/core/model/deserializable.interface";

export class Score implements Deserializable {
  new: boolean;
  win: boolean;
  score: number;
  playerName: string;

  deserialize(input: any) {
    Object.assign(this, {
      new: input.new,
      win: input.win,
      score: input.score,
      playerName: input.player_name
    });
    return this;
  }
}
