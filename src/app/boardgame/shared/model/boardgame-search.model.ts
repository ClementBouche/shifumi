import { Serializable } from "src/app/core/model/serializable.interface";

export class BoardgameSearch implements Serializable {

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

}
