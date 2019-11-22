import { Deserializable } from 'src/app/core/model/deserializable.interface';
import { User } from 'src/app/user/shared/model/user.model';

export class Player implements Deserializable {
  id: string;
  // metadata
  name: string;
  active: boolean;

  avatar: {
    image: string;
    colors: string[];
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

  // user
  userId: string;
  user: User;

  serialize() {
    return {
      name: this.name,
      have_account: this.active,
      avatar_image: this.avatar ? this.avatar.image : '',
      avatar_colors: this.avatar ? this.avatar.colors : '',
      play_time: this.time,
      win_ratio: this.victoryRatio,
      user_id: this.userId,
    };
  }

  deserialize(input: any) {
    const user = input.user ? new User().deserialize(input.user) : null;
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
        colors: input.avatar_colors
      },
      time: input.play_time,
      victoryRatio: input.win_ratio,
      userId: input.user_id,
      user: user
    });
    return this;
  }

}
