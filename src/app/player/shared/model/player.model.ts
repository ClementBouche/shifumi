import { Deserializable } from "src/app/core/model/deserializable.interface";

export class Player implements Deserializable {
  id: string;
  // metadata
  name: string;
  active: boolean;

  avatar: {
    image: string;
    color: string;
  };

  // statitic
  counts: {
    boardgames: number;
    plays: number;
    incompletes: number;
    wins: number;
    places: number;
    players: number;
  };

  //
  time: number;
  victoryRatio: number;

  serialize() {
    return {
      name: this.name,
      have_account: this.active,
      avatar_image: this.avatar ? this.avatar.image : '',
      avatar_color: this.avatar ? this.avatar.color : '',
      play_time: this.time,
      win_ratio: this.victoryRatio
    };
  }

  deserialize(input: any) {
    Object.assign(this, {
      id: input._id,
      name: input.name,
      active: input.have_account,
      counts: {
        boardgames: input.boardgames_count,
        plays: input.plays_count,
        incompletes: input.plays_incomplete_count,
        wins: input.plays_win_count,
        places: input.places_count,
        players: input.players_count
      },
      avatar: {
        image: input.avatar_image,
        color: input.avatar_color
      },
      time: input.play_time,
      victoryRatio: input.win_ratio,
    })
    return this;
  }

}
