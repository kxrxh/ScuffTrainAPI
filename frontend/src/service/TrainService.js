import { configuration } from "../misc/configuration";
import { designResponses } from "../misc/designResponses";
import { NetworkService } from "./NetworkService";
import { FrontEndService } from "./FrontEndService";

export const TrainService = {
    getAllTrains(success, fail) {
        if(configuration.designMode) return success(designResponses.getAllTrains);
        return NetworkService.GET(`/train/all/${new Date().getTime()+configuration.timeOffset}`, data => FrontEndService.getDataFromResponse(data, success), fail);
    },
    getShortTrain(id, success, fail) {
        if(configuration.designMode) return success(designResponses.getShortTrain(id));
        return NetworkService.GET(`/train/short/${id}/${new Date().getTime()+configuration.timeOffset}`, data => FrontEndService.getDataFromResponse(data, success), fail);
    },
    getFullTrain(id, success, fail) {
        if(configuration.designMode) return success(designResponses.getFullTrain(id));
        return NetworkService.GET(`/train/full/${id}/${new Date().getTime()+configuration.timeOffset}`, data => FrontEndService.getDataFromResponse(data, success), fail);
    },
    getTrainPathFull(id, success, fail) {
        if(configuration.designMode) return success(designResponses.getTrainPathFull(id));
        return NetworkService.GET(`/train/path/full/${id}/${new Date().getTime()+configuration.timeOffset}`, data => FrontEndService.getDataFromResponse(data, success), fail);
    },
    getTrainPathUpdate(id, success, fail) {
        if(configuration.designMode) return success(designResponses.getTrainPathShort(id));
        return NetworkService.GET(`/train/path/short/${id}/${new Date().getTime()+configuration.timeOffset}`, data => FrontEndService.getDataFromResponse(data, success), fail);
    }
}