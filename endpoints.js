let endpoints = {
    "endpoints": {
        "GET /station/{id}": { // Получить конкретную станцию
            "id": 0,
            "coords": [41, 42],
            "departures": ["/train/short/{id}"], // Все поезда
            "current_trains": ["/train/short/{id}"],  // Все поезда
            "arrivals": ["/train/short/{id}"]  // Все поезда
        },
        "GET /station/all": { // Получить все станции кратко
            "id": 0,
            "coords": [41, 42],
            "departures": "/train/short/{id}", // Последний поезд
            "current_trains": "AMOUNT" // Количество на станциии
        },
        "GET /train/all": { // Получить все позда
            "id": 0,
            "start_id": 0, // Станция
            "destination_id": 0, // Станция
            "is_move": true, // Находится в движении
            "move_time": 30 // Минут, опционально
        },
        "GET /train/short/{id}": { // Получить поезд и его текущие координаты
            "id": 0,
            "start_id": 0, // Станция
            "destination_id": 0, // Станция
            "coords": [41, 42],
            "is_move": true, // Находится в движении
            "move_time": 30 // Минут, опционально
        },
        "GET /train/full/{id}": { // Получить поезд, его текущие координаты и все вагоны
            "id": 0,
            "start_id": 0, // Станция
            "destination_id": 0, // Станция
            "coords": [41, 42],
            "wagons": [{ // foreach
                "id": 0,
                "start_id": 0,
                "destination_id": 0,
                "operation_date": undefined
            }], // Вагоны
            "is_move": true, // Находится в движении
            "move_time": 30 // Минут, опционально
        },
        "GET /train/path/{id}": { // Получить линию пути поезда и все поезда на данной линии
            "path_data": [],
            "trains_on_path": ["/train/short/{id}"]
        },
        "GET /train/path/short/{id}": { // Получить только поезда на линии пути поезда
            "trains_on_path": ["/train/short/{id}"]
        }
    }
}