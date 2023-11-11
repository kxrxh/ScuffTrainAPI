import { designGenerator } from "./designGenerator";

const generateTrains = designGenerator.generateTrains();
const generateStations = designGenerator.generateStationsForTrains(generateTrains);

export const designResponses = {
    getAllStations: () => {
        return generateStations.map(s => designGenerator.shortStation(s));
    },
    getStation(id) {
      return generateStations.find((s) => s.id == id);
    },
    getAllTrains: generateTrains,
    getShortTrain(id) {
      return designGenerator.shortTrain(generateTrains.find((t) => t.id == id));
    },
    getFullTrain(id) {
      return generateTrains.find((t) => t.id == id);
    },
    getTrainPathFull(id) {
      return designGenerator.getFullPath(this.getFullTrain(id), generateTrains);
    },
    getTrainPathShort(id) {
      return { trains_on_path: designGenerator.getRandomTrains(generateTrains, 3) };
    },
  };;