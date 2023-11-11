import { configuration } from "../misc/configuration";
import { designResponses } from "../misc/designResponses";
import { NetworkService } from "./NetworkService";
import { FrontEndService } from "./FrontEndService";

export const StationService = {
    getAllStations(success, fail) {
        if(configuration.designMode) return success(designResponses.getAllStations());
        NetworkService.GET(`/station/all`, data => FrontEndService.getDataFromResponse(data, success), fail);
    },
    getStation(id, success, fail) {
        if(configuration.designMode) return success(designResponses.getStation(id));
        NetworkService.GET(`/station/id/${id}`, data => FrontEndService.getDataFromResponse(data, success), fail);
    }
}