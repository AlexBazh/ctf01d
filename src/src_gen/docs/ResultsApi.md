# CtfManagementApi.ResultsApi

All URIs are relative to *https://ctf01d.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResult**](ResultsApi.md#createResult) | **POST** /api/v1/games/{gameId}/results | Create a new game result
[**getResult**](ResultsApi.md#getResult) | **GET** /api/v1/games/{gameId}/results/{resultId} | Get game result
[**getScoreboard**](ResultsApi.md#getScoreboard) | **GET** /api/v1/games/{gameId}/scoreboard | Get game scoreboard
[**updateResult**](ResultsApi.md#updateResult) | **PUT** /api/v1/games/{gameId}/results/{resultId} | Update a result

<a name="createResult"></a>
# **createResult**
> CreateResultResponse createResult(body, gameId)

Create a new game result

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ResultsApi();
let body = new CtfManagementApi.ResultRequest(); // ResultRequest | 
let gameId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.createResult(body, gameId, (error, data, response) => {
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
 **body** | [**ResultRequest**](ResultRequest.md)|  | 
 **gameId** | [**String**](.md)|  | 

### Return type

[**CreateResultResponse**](CreateResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getResult"></a>
# **getResult**
> ResultResponse getResult(gameId, resultId)

Get game result

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ResultsApi();
let gameId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let resultId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.getResult(gameId, resultId, (error, data, response) => {
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
 **resultId** | [**String**](.md)|  | 

### Return type

[**ResultResponse**](ResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScoreboard"></a>
# **getScoreboard**
> ResultResponse getScoreboard(gameId)

Get game scoreboard

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ResultsApi();
let gameId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.getScoreboard(gameId, (error, data, response) => {
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

[**ResultResponse**](ResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateResult"></a>
# **updateResult**
> updateResult(body, gameId, resultId)

Update a result

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ResultsApi();
let body = new CtfManagementApi.ResultRequest(); // ResultRequest | 
let gameId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let resultId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.updateResult(body, gameId, resultId, (error, data, response) => {
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
 **body** | [**ResultRequest**](ResultRequest.md)|  | 
 **gameId** | [**String**](.md)|  | 
 **resultId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

