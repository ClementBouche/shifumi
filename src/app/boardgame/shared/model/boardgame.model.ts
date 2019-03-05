import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Artist } from "./artist.model";
import { Designer } from "./designer.model";
import { Poll } from "./poll.model";

export class Boardgame implements Deserializable {
    id: string;
    // metadata
    name: string;
    description: string;
    year: string;
    age: number;
    // images
    thumbnail: string;
    image: string;
    // players
    players: {
      min: number;
      max: number;
      poll: Poll;
    };
    // play time
    time: {
      average: number;
      min: number;
      max: number;
    };
    // advance information
    subdomain: string;
    thematics: [string];
    mechanics: [string];
    // people information
    artists: [Artist];
    designers: [Designer];
    // global statistic data
    statitics: {
      playCount: number;
      incompletePlayCount: number;
      placeCount: number;
      playerCount: number;
      playTime: number;
    };

    deserialize(input: any) {
      const arstist = input.arstist ? input.artists.map((artist) => new Artist().deserialize(artist)) : [];
      const designers = input.designers ? input.designers.map((designer) => new Designer().deserialize(designer)) : [];
      const poll = input.suggested_players ? new Poll().deserialize(input.suggested_players) : null;
      Object.assign(this, {
        id: input._id,
        name: input.name,
        description: input.description,
        year: input.year_published,
        age: input.age,
        thumbnail: input.thumbnail,
        image: input.image,
        players: { 
          min: input.min_players,
          max: input.max_players,
          poll: poll
        },
        time: {
          average: input.playing_time,
          min: input.min_play_time,
          max: input.max_play_time
        },
        subdomain: input.subdomain,
        thematics: input.thematics,
        mechanics: input.mechanics,
        artists: arstist,
        designers: designers,
        statitics: {
          playCount: input.plays_count,
          incompletePlayCount: input.plays_incomplete_count,
          placeCount: input.places_count,
          playerCount: input.players_count,
          playTime: input.play_time
        }
      });
      return this;
    }

}
