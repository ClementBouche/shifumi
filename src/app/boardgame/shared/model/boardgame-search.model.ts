import { Serializable } from "src/app/core/model/serializable.interface";
import { Deserializable } from "src/app/core/model/deserializable.interface";

export class BoardgameSearch implements Serializable, Deserializable {

  name: string;
  
  players: [number];

  time: {
    min: number;
    max: number;
  } = {
    min: 0,
    max: 9999
  };

  thematics: [string];

  mechanics: [string];

  serialize(): any {
    return {
      name: this.name,
      players: this.players,
      min_time: this.time.min,
      max_time: this.time.max,
      thematics: this.thematics,
      mechanics: this.mechanics
    }
  }

  deserialize(input: any) {
    Object.assign(this, {
      name: input.name,
      players: input.players,
      time: {
        min: input.min_time,
        max: input.max_time,
      },
      thematics: input.thematics,
      mechanics: input.mechanics
    });
    return this;
  }

}
