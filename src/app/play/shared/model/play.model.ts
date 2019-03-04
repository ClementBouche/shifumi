export class Play {
  _id: number;
  // xml api info
  xmlapi_id: number;
  // metadata
  date: string;
  place: string;
  boardgame_xmlapi_id: string;
  boardgame_name: string;
  playing_time: string;
  incomplete: string;
  // scores
  scores: [{
    new: boolean;
    win: boolean;
    score: number;
    player_name: string;
    _id: string;
  }];
}
