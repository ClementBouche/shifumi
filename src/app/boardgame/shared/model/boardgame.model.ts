import { Deserializable } from "src/app/core/model/deserializable.interface";
import { Artist } from "./artist.model";
import { Designer } from "./designer.model";
import { Poll } from "./poll.model";

export class Boardgame implements Deserializable {
    id: string;
    xmlId: string;
    // metadata
    name: string;
    description: string;
    year: number;
    age: number;
    rank: number;
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

    // app specific properties
    preview: boolean = false;

    hasInfo() {
      return this.time || this.players;
    }

    deserialize(input: any) {
      const artists = input.artists ? input.artists.map((artist) => new Artist().deserialize(artist)) : [];
      const designers = input.designers ? input.designers.map((designer) => new Designer().deserialize(designer)) : [];
      const poll = input.suggested_players ? new Poll().deserialize(input.suggested_players) : null;
      const statistic = input.plays_count ? {
        playCount: input.plays_count,
        incompletePlayCount: input.plays_incomplete_count,
        placeCount: input.places_count,
        playerCount: input.players_count,
        playTime: input.play_time
      } : null;
      Object.assign(this, {
        id: input._id,
        xmlId: input.xmlapi_id,
        name: input.name,
        description: input.description,
        year: parseInt(input.year_published),
        age: parseInt(input.age),
        rank: parseInt(input.rank),
        thumbnail: input.thumbnail,
        image: input.image,
        players: { 
          min: parseInt(input.min_players),
          max: parseInt(input.max_players),
          poll: poll
        },
        time: {
          average: parseInt(input.playing_time),
          min: parseInt(input.min_play_time),
          max: parseInt(input.max_play_time),
        },
        subdomain: input.subdomain,
        thematics: input.thematics,
        mechanics: input.mechanics,
        artists: artists,
        designers: designers,
        statitics: statistic
      });
      return this;
    }

}
