import { Player } from 'src/app/player/shared/model/player.model';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { Deserializable } from 'src/app/core/model/deserializable.interface';

/**
 * BoardgamePoll
 */
export class BoardgamePoll implements Deserializable {

    id: string;

    votes: [{
        player: Player;
        boardgame: Boardgame
    }];

    deserialize(input: any) {
        Object.assign(this, {
            id: input.id,
            votes: input.votes
        });
        return this;
    }

}
