import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";
import { Score } from "./score.model";

export class Play implements Deserializable, Serializable {
  id: string;
  // metadata
  date: string;
  place: string;
  boardgameName: string;
  playingTime: string;
  incomplete: boolean;
  // scores
  scores: Array<Score> = new Array<Score>();

  serialize() {
    const scores = this.scores.map((sc) => {
      return sc.serialize();
    });
    return {
      _id: this.id,
      date: this.date,
      place_name: this.place,
      boardgame_name: this.boardgameName,
      playing_time: this.playingTime,
      incomplete: this.incomplete,
      scores: scores
    };
  }

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
