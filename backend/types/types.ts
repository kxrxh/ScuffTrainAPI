export type Dislocation = {
  WAGNUM: number;
  OPERDATE: Date;
  ST_ID_DISL: number;
  TRAIN_INDEX: string;
  ST_ID_DEST: number;
};

export type Stage = {
  start_id: number;
  end_id: number;
  length: number
}

export type Station = {
  id: number;
  latitude: number;
  longitude: number
}

export type Train = {
  id: number | undefined;
  start_id: number;
  end_id: number;
}

export type Wagon = {
  id: number | undefined;
  train_id: number | null;
  operation_date: Date;
  last_station_id: number;
  wagon_destination_id: number;
}