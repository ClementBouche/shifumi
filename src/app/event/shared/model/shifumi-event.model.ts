import { Serializable } from 'src/app/core/model/serializable.interface';
import { Deserializable } from 'src/app/core/model/deserializable.interface';

import { Player } from 'src/app/player/shared/model/player.model';
import { BoardgamePoll } from './boardgame-poll.model';

/**
 * Evenement
 */
export class ShifumiEvent implements Serializable, Deserializable {

    id: string;

    name: string;

    description: string;

    date: string;

    place: string;

    public: boolean;

    status: string;

    players: Player[];

    poll: BoardgamePoll;

    // TODO date poll ???

    deserialize(input: any) {
        Object.assign(this, {
            id: input.id,
            name: input.name,
            description: input.description,
            public: input.public || true,
            date: input.date || '2019-11-07',
            place: input.place || 'Midi Jeux',
            status: input.status || 'ouvert',
            players: input.players,
            poll: input.poll
        });
        return this;
    }

    serialize() {
        return {

        };
    }

}
