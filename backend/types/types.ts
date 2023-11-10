export type Dislocation = {
  WAGNUM: number;
  OPERDATE: Date;
  ST_ID_DISL: number;
  TRAIN_INDEX: string;
  ST_ID_DEST: number;
};

export type Stage = {
  START_CODE: number;
  END_CODE: number;
  LEN: number
}

export type Station = {
  ST_ID: number;
  LATITUDE: number;
  LONGITUDE: number
}

export type Train ={
  id: number | undefined;
  start_id: number;
  end_id: number;
  wagons: Wagon[];
}

export type Wagon = {
  id: number | undefined;
  train_id: number;
  operation_date: Date;
  last_station_id: number;
  wagon_destination_id: number;
}