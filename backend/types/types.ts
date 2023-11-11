export type Stage = {
  start: number;
  end: number;
  length: number
}

export type Station = {
  station_id: number;
  latitude: number;
  longitude: number
}

export type Train = {
  train_number: number;
  is_move: boolean;
  start_id: number;
  end_id: number;
}

export type Wagon = {
  wagon_number: number;
  train_id: number
  destination_id: number;
}