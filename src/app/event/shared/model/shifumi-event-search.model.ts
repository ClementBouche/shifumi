import { Deserializable } from 'src/app/core/model/deserializable.interface';

/**
 * Event search
 */
export class ShifumiEventSearch implements Deserializable {

    // state of the event
    status: string;

    // before this date
    before: string;

    // after this date
    after: string;

    // which the following player is concerned
    playerId: string;

    deserialize(input: any) {
        Object.assign(this, {
            status: input.status,
            before: input.before,
            after: input.after,
            playerId: input.player_id
        });
        return this;
    }

}
