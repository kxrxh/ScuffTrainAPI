import { parseDislocation } from "./csvParser";
import { Dislocation, Train, Wagon } from "../types/types";

export async function loadTrainsFromCSV(filename: string): Promise<Train> {
    let dislocations =  await parseDislocation(filename)
    let trainArray = [];
    let wagonArray = [];
    let trainCreationStation;
    let trainId;
    let trainDestinationStation;        
    for (let i = 0; i < dislocations.length; i++) {
        const parts = dislocations[i].TRAIN_INDEX.split('-');

        if (parts.length === 3) {
          trainCreationStation = parts[0];
          trainId = parts[1];
          trainDestinationStation = parts[2];
        
        let wagon:Wagon = {
            id: dislocations[i].WAGNUM,
            operation_date: dislocations[i].OPERDATE,
            last_station_id: dislocations[i].ST_ID_DISL,
            wagon_destination_id: dislocations[i].ST_ID_DEST,
            train_id: trainId
        }
        trainArray.push(wagon)
    }
}


}