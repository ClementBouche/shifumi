export class Boardgame {
    _id: number;
    // xml api info
    xmlapi_id: number;
    // metadata
    name: string;
    description: string;
    year_published: string;
    // images
    thumbnail: string;
    image: string;
    // game information
    min_players: number;
    max_players: number;
    playing_time: number;
    min_play_time: number;
    max_play_time: number;
    age: number;
    // advance information
    subdomain: string;
    thematics: [string];
    mechanics: [string];
    // people information
    artists: [{
        xmlapi_id: number;
        name: string;
    }];
    designers: [{
        xmlapi_id: number;
        name: string;
    }];
    // community information
    suggested_players: {
        votes: number;
        poll: [{
        player_count: string;
        best: number;
        recommanded: number;
        not_recommanded: number;
        }];
    };
    // global statistic data
    plays_count: number;
    plays_incomplete_count: number;
    places_count: number;
    players_count: number;
    play_time: number;
}
