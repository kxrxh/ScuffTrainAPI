export const FrontEndService = {
    getConnectionStorage(name) {
        let data = sessionStorage.getItem(name);
        sessionStorage.removeItem(name);
        if(data) return JSON.parse(data);
    },
    setConnectionStorage(name, data) {
        sessionStorage.setItem(name, JSON.stringify(data));
    },
    setupConnectionStorage(name, callback) {
        return setInterval(() => {
            let data = FrontEndService.getConnectionStorage(name);
            if (data) callback(data);
        }, 10);
    },
    clearConnectionStorage(id) {
        clearInterval(id);
    },
    convertTime(timeInMinutes) {
        let hours = Math.floor(timeInMinutes / 60);
        let minutes = Math.floor(timeInMinutes % 60);
        if(hours < 1) return minutes+"мин";
        if(minutes < 1) return hours+"ч";
        return hours+"ч "+minutes+"мин";
    },
    getDataFromResponse(response, callback) {
        if(response.data)
            callback(response.data);
        else callback(response);
    },
    convertCoords(coords) {
        return [coords.lat, coords.long];
    },
    defaultErrorHandler(router, info) {
        console.log(info);
        debugger;
        router.push({name: "error"});
    }
}