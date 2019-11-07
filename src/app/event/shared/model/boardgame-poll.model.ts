import { Player } from 'src/app/player/shared/model/player.model';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';

export class BoardgamePoll {
    id: string;

    votes: [{
        player: Player;
        boardgame: Boardgame
    }];

}
