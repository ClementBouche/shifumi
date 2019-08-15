import { Serializable } from 'src/app/core/model/serializable.interface';
import { Deserializable } from 'src/app/core/model/deserializable.interface';
import { Place } from './place.model';

export class PlacesPage implements Serializable, Deserializable {

  count: number;

  size: number;

  page: number;

  result: Place[];

  serialize(): any {
    return {
      count: this.count,
      size: this.size,
      page: this.page,
      result: this.result
    };
  }

  deserialize(input: any) {
    Object.assign(this, {
      count: input.count || input.result.length || 0,
      size: input.size || input.result.length || 0,
      page: input.page || 1,
      result: input.result.length > 0 ? input.result.map((place: any) => new Place().deserialize(place)) : []
    });
    return this;
  }

}
