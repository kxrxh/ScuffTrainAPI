# Scuff Train API Routes
## Api handlers
### `getWagonsByTrainId`

-   **Description**: This handler retrieves the wagons associated with a specific train ID.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: This function currently throws an error ("Function not implemented"). It appears that the functionality for retrieving wagons by a train ID is not yet implemented.
    

### `getStationCoordsById`

-   **Description**: This handler retrieves the coordinates of a station by its ID.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: This handler first checks the request body for validity. It checks if there is a body and if it is an object. If the body is missing or not an object, it returns a 400 Bad Request response with an appropriate error message. If the body is valid, it proceeds to extract the `station_id` from the body and retrieves the coordinates for the specified station ID using the `getStationCoords` function. Finally, it returns a 200 OK response with the coordinates.
    

### `getStationStages`

-   **Description**: This handler retrieves all available destinations for a given origin with road length.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: Similar to `getStationCoordsById`, this handler also checks the request body for validity, ensuring it is an object and contains the `origin_id`. If the body is missing or invalid, it returns a 400 Bad Request response with an appropriate error message. If the body is valid, it extracts the `origin_id`, and then it retrieves the stages for the specified origin using the `getStagesByOrigin` function. Finally, it returns a 200 OK response with the stages.
    

### `getStations`

-   **Description**: This handler retrieves all available stations.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: This handler does not validate any request body or parameters. It directly returns a 200 OK response with a JSON object containing all available stations obtained by calling the `getAllStations` function.
    

### `getTrains`

-   **Description**: This handler is meant to retrieve all available trains.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: This function currently throws an error ("Function not implemented"), indicating that the functionality for retrieving all available trains is not yet implemented.
    

### `getTrainById`

-   **Description**: This handler is supposed to retrieve train information by its ID.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: This function currently throws an error ("Function not implemented"), indicating that the functionality for retrieving train information by its ID is not yet implemented.
    

### `getTrainsByDestination`

-   **Description**: This handler is intended to retrieve train information by the given destination ID.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: This function currently throws an error ("Function not implemented"), indicating that the functionality for retrieving train information by the destination ID is not yet implemented.
    

### `getTrainsByOrigin`

-   **Description**: This handler is meant to retrieve train information by the given origin ID.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: This function currently throws an error ("Function not implemented"), indicating that the functionality for retrieving train information by the origin ID is not yet implemented.
    

### `postUploadFile`

-   **Description**: This handler allows the uploading of a file, typically a CSV file.
    
-   **Parameters**:
    
    -   `req`: The request object.
    -   `res`: The response object.
-   **Implementation**: This handler first checks the request body and parameters for validity. It ensures that both the body and parameters are present and that the `filename` parameter is provided. If any of these checks fail, it returns a 400 Bad Request response with an appropriate error message. If the checks pass, it constructs a file path based on the provided `filename` and writes the content from the request body to that file path. Finally, it returns a 200 OK response with a message indicating the successful upload of the file.
    

## Endpoints and Handlers

### GET Endpoints

1.  `/ping`
    
    -   **Handler**: Responds with "pong" and the current timestamp.
2.  `/station/all`
    
    -   **Handler**: Calls the `getStations` function to retrieve all available stations.
3.  `/train/all`
    
    -   **Handler**: Calls the `getTrains` function to retrieve all available trains.

### POST Endpoints

1.  `/station/coords`
    
    -   **Handler**: Calls the `getStationCoordsById` function to retrieve station coordinates by ID.
2.  `/station/stages`
    
    -   **Handler**: Calls the `getStationStages` function to retrieve stages for a given station origin.
3.  `/train/origin/`
    
    -   **Handler**: Calls the `getTrainsByOrigin` function to retrieve train information by the given origin ID.
4.  `/train/destination/`
    
    -   **Handler**: Calls the `getTrainsByDestination` function to retrieve train information by the given destination ID.
5.  `/train/id/`
    
    -   **Handler**: Calls the `getTrainById` function to retrieve train information by its ID.

### File Upload

-   `/upload/:filename`
    -   **Handler**: Calls the `postUploadFile` function to handle file uploads. It expects a filename parameter in the URL and handles file upload operations.

## Integration with the App

-   `app.use('/v1/', routerV1);`: Integrates the router (`routerV1`) into the app, providing a base URL path of `/v1/` for these API endpoints.

updated @11/11, 12:11 AM