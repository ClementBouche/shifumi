import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Score } from "./score.model";

export class Play implements Deserializable {
  id: string;
  // metadata
  date: string;
  place: string;
  boardgameName: string;
  playingTime: string;
  incomplete: boolean;
  // scores
  scores: Array<Score> = new Array<Score>();

  deserialize(input: any) {
    const scores = input.scores ? input.scores.map((score) => new Score().deserialize(score)) : [];
    Object.assign(this, {
      id: input._id,
      date: input.date,
      place: input.place_name,
      boardgameName: input.boardgame_name,
      playingTime: input.playing_time,
      incomplete: input.incomplete,
      scores: scores
    })
    return this;
  }


}
