import { Serializable } from 'src/app/core/model/serializable.interface';
import { Deserializable } from 'src/app/core/model/deserializable.interface';

export class BoardgameSearch implements Serializable, Deserializable {

  name: string;

  players: {
    min: number;
    max: number;
  } = {
    min: 0,
    max: 99
  };

  time: {
    min: number;
    max: number;
  } = {
    min: 0,
    max: 1440
  };

  thematics: string[];

  mechanics: string[];

  page: number = 1;

  size: number = 20;

  orderBy: string = 'rank';
  // 1 croissant / -1 décroisssant
  order: string = '1';

  // test recherche par auteur
  peopleName: String;

  /**
   * extended search are performed with xmlApi
   * @memberOf BoardgameSearch
   */
  extended: boolean = false;

  serialize(): any {
    return {
      name: this.name,
      min_time: this.time.min,
      max_time: this.time.max,
      min_players: this.players.min,
      max_players: this.players.max,
      thematics: this.thematics,
      mechanics: this.mechanics,
      page: this.page,
      size: this.size,
      order_by: this.orderBy,
      order: this.order,
      people_name: this.peopleName,
      extended: this.extended,
    };
  }

  deserialize(input: any) {
    let thematics = input.thematics;
    if (input.thematics && !Array.isArray(input.thematics)) {
      thematics = [thematics];
    }
    let mechanics = input.mechanics;
    if (input.mechanics && !Array.isArray(input.mechanics)) {
      mechanics = [mechanics];
    }
    Object.assign(this, {
      name: input.name,
      players: {
        min: Number.parseInt(input.min_players) || 0,
        max: Number.parseInt(input.max_players) || 99,
      },
      time: {
        min: Number.parseInt(input.min_time) || 0,
        max: Number.parseInt(input.max_time) || 1440,
      },
      thematics: thematics,
      mechanics: mechanics,
      page: Number.parseInt(input.page) || 1,
      size: Number.parseInt(input.size) || 20,
      orderBy: input.order_by || 'rank',
      order: Number.parseInt(input.order) || 1,
      peopleName: input.people_name,
      extended: input.extended === 'true' ? true : false
    });
    return this;
  }

}
