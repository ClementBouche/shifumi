import { Deserializable } from "src/app/core/model/deserializable.interface";

export class Poll implements Deserializable {
  votes: number;
  data: [{
    playersCount: string;
    best: number;
    recommanded: number;
    notRecommanded: number;
  }];

  deserialize(input: any) {
    const data = input.poll ? input.poll.map((votes) => this.deserializeVotes(votes)) : [];
    Object.assign(this, {
      votes: input.votes,
      data: data
    });
    return this;
  }

  private deserializeVotes(input: any) {
    return {
      playersCount: input.player_count,
      best: input.best,
      recommanded: input.recommanded,
      notRecommanded: input.not_recommanded
    }
  }
}
