// GetStationById handler

export type StationLongDTO = {
    id: number;
    coords: {
        lat: number;
        long: number
    };
    departure: TrainShortDTO[],
    arrivals: TrainShortDTO[],
    current: TrainShortDTO[]
}

// GetAllStationHandler

export type GetAllStationsDTO = {
    stations: StationShortDTO[]
}

export type StationShortDTO = {
    id: number;
    coords: {
        lat: number;
        long: number
    }
    departure: TrainShortDTO,
    current_num: number
}

// GetAllTrains
export type GetAllTrainsDTO = {
    trains: TrainShortDTO[]
}

export type TrainShortDTO = {
    id: number;
    start_id: number;
    dest_id: number;
    is_move: boolean;
    move_time: number | null;
}

// GetTrainsById
export type TrainShortWithCoordsDTO = {
    id: number;
    start_id: number;
    dest_id: number;
    is_move: boolean;
    move_time: number | null;
    coords: {
        lat: number;
        long: number
    }
}

// GetTrainFull
export type TrainFullDTO = {
    id: number;
    start_id: number;
    dest_id: number;
    is_move: boolean;
    move_time: number | null;
    coords: {
        lat: number;
        long: number
    };
    wagons: WagonShortDTO[];
}

export type WagonShortDTO = {
    id: number;
    start_id: number;
    dest_id: number;
    operation_date: Date
}