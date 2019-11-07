import { ShifumiEvent } from './shifumi-event.model';
import { Deserializable } from 'src/app/core/model/deserializable.interface';

/**
 * Shifumi Event Page
 * Result object when searching for shifumiEvent
 */
export class ShifumiEventPage implements Deserializable {

  index: number;

  size: number;

  count: number;

  result: ShifumiEvent[];

  deserialize(input: any) {
      const result = input.result ? input.result : [];
      Object.assign(this, {
          index: input.index || 1,
          size: input.size || 0,
          count: input.count || 0,
          result: result
      });
      return this;
  }

}
