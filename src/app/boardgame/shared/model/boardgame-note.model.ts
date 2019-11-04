import { Deserializable } from "src/app/core/model/deserializable.interface";

export class BoardgameNote implements Deserializable {

  // boardgame rank
  rank: number;

  // rank family: 'all', 'thematic', 'strategygames'
  type: string = 'all';

  // bayes value
  value: number;

  // average value
  average: number;

  // number of votes
  votes: number;

  deserialize(input: any) {
    Object.assign(this, {
      rank: Number.parseInt(input.rank),
      type: input.name,
      value: Number.parseFloat(input.bayes_note),
      average_note: Number.parseFloat(input.average_note),
    });
    return this;
  }
}
