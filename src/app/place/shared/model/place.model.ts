import { Deserializable } from 'src/app/core/model/deserializable.interface';
import { Serializable } from 'src/app/core/model/serializable.interface';

export class Place implements Deserializable, Serializable {
    id: string;
    name: string;

    // statitic
    counts: {
        boardgames: number;
        plays: number;
        incompletes: number;
        time: number;
        players: number;
    };

    deserialize(input: any) {
        Object.assign(this, {
            id: input._id,
            name: input.name,
            counts: {
                boardgames: input.boardgames_count,
                plays: input.plays_count,
                incompletes: input.plays_incomplete_count,
                time: input.play_time,
                players: input.players_count
            },
        });
        return this;
    }

    serialize() {
        return {};
    }
}
