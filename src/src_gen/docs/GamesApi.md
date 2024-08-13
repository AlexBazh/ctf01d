# CtfManagementApi.GamesApi

All URIs are relative to *https://ctf01d.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGame**](GamesApi.md#createGame) | **POST** /api/v1/games | Create a new game
[**deleteGame**](GamesApi.md#deleteGame) | **DELETE** /api/v1/games/{gameId} | Delete a game
[**getGameById**](GamesApi.md#getGameById) | **GET** /api/v1/games/{gameId} | Get a game by ID
[**listGames**](GamesApi.md#listGames) | **GET** /api/v1/games | List all games
[**updateGame**](GamesApi.md#updateGame) | **PUT** /api/v1/games/{gameId} | Update a game

<a name="createGame"></a>
# **createGame**
> CreateGameResponse createGame(body)

Create a new game

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.GamesApi();
let body = new CtfManagementApi.GameRequest(); // GameRequest | 

apiInstance.createGame(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GameRequest**](GameRequest.md)|  | 

### Return type

[**CreateGameResponse**](CreateGameResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGame"></a>
# **deleteGame**
> deleteGame(gameId)

Delete a game

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.GamesApi();
let gameId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.deleteGame(gameId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGameById"></a>
# **getGameById**
> GameResponse getGameById(gameId)

Get a game by ID

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.GamesApi();
let gameId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.getGameById(gameId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**String**](.md)|  | 

### Return type

[**GameResponse**](GameResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listGames"></a>
# **listGames**
> [GameResponse] listGames()

List all games

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.GamesApi();
apiInstance.listGames((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[GameResponse]**](GameResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateGame"></a>
# **updateGame**
> updateGame(body, gameId)

Update a game

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.GamesApi();
let body = new CtfManagementApi.GameRequest(); // GameRequest | 
let gameId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.updateGame(body, gameId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GameRequest**](GameRequest.md)|  | 
 **gameId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

