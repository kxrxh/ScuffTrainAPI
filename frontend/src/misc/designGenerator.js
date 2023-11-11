import { designResponses } from "./designResponses";
import { FrontEndService } from "../service/FrontEndService";

export const designGenerator = {
    trainId: 0,
    wagonId: 0,
    generateTrain() {
        return {
            "id": this.trainId++,
            "start_id": Math.floor(Math.random()*20), // Станция
            "destination_id": Math.floor(Math.random()*20), // Станция
            "coords": this.generateCoordinates(),
            "wagons": this.generateWagons(Math.floor(Math.random()*20)), // Вагоны
            "is_move": Math.random() > 0.5, // Находится в движении
            "move_time": Math.floor(Math.random()*120) // Минут
        }
    },
    generateCoordinates() {
        return {
            lat: (Math.random() > 0.5 ? 1 : -1) * Math.random()*60,
            long: (Math.random() > 0.5 ? 1 : -1) * Math.random()*120
        }
    },
    generateWagon() {
        return {
            "id": this.wagonId++,
            "start_id": Math.floor(Math.random()*1000),
            "destination_id": Math.floor(Math.random()*1000),
            "operation_date": undefined
        }
    },
    generateWagons(count) {
        let result = [];
        for(let i = 0; i < count; i++)
            result.push(this.generateWagon());
        return result;
    },
    generateTrains() {
        let result = [];
        for(let i = 0; i < 200; i++)
            result.push(this.generateTrain());
        return result;
    },
    fetchStations(trains) {
        let result = [];
        for(let train of trains) {
            if(!result.includes(train.start_id))
                result.push(train.start_id);
            if(!result.includes(train.destination_id))
                result.push(train.destination_id);
        }
        return result;
    },
    generateStationsForTrains(trains) {
        let stations_id = this.fetchStations(trains);
        let result = [];
        for(let id of stations_id) {
            result.push({
                "id": id,
                "coords": this.generateCoordinates(),
                "departures": trains.filter(t => t.start_id == id),
                "current_trains": this.getRandomTrains(trains, 3),
                "arrivals": trains.filter(t => t.destination_id == id)
            })
        }
        return result;
    },
    getRandomTrains(trains, amount) {
        let result = [];
        for(let i = 0; i < amount; i++)
            result.push(trains[Math.floor(Math.random()*trains.length)]);
        return result;
    },
    shortTrain(train) {
        if(!train) return;
        return {
            "id": train.id,
            "start_id": train.start_id,
            "destination_id": train.destination_id,
            "coords": train.coords,
            "is_move": train.is_move,
            "move_time": train.move_time
        }
    },
    shortStation(station) {
        if(!station) return;
        return {
            "id": station.id,
            "coords": station.coords,
            "departures": station.departures.length > 0 ? station.departures[0] : {},
            "current_trains": station.current_trains.length,
        }
    },
    getFullPath(train, allTrains) {
        if(!train) return;
        return {
            "path_data": [
                FrontEndService.convertCoords(designResponses.getStation(train.start_id).coords),
                FrontEndService.convertCoords(train.coords),
                FrontEndService.convertCoords(designResponses.getStation(train.destination_id).coords),
            ],
            "trains_on_path": this.getRandomTrains(allTrains, 3)
        }
    }
}