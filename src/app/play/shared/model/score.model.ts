import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Serializable } from "src/app/core/model/serializable.interface";

export class Score implements Deserializable, Serializable {
  new: boolean = false;
  winner: boolean = false;
  value: number = 0;

  playerId: string = '';
  playerName: string = '';
  playerThumbnail: string;

  serialize() {
    return {
      new: this.new,
      win: this.winner,
      score: this.value,
      player_id: this.playerId,
      player_name: this.playerName,
      player_thumbnail: this.playerThumbnail,
    };
  }

  deserialize(input: any) {
    Object.assign(this, {
      new: input.new,
      winner: input.win,
      value: input.score,
      playerId: input.player_id,
      playerName: input.player_name,
      playerThumbnail: input.player_thumbnail,
    });
    return this;
  }

}
