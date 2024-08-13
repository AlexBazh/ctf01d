# CtfManagementApi.TeamsApi

All URIs are relative to *https://ctf01d.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveUserTeam**](TeamsApi.md#approveUserTeam) | **PUT** /api/v1/teams/{teamId}/members/{userId} | Approve connected user with team lead
[**connectUserTeam**](TeamsApi.md#connectUserTeam) | **POST** /api/v1/teams/{teamId}/members/{userId} | Connect user with team
[**createTeam**](TeamsApi.md#createTeam) | **POST** /api/v1/teams | Create a new team
[**deleteTeam**](TeamsApi.md#deleteTeam) | **DELETE** /api/v1/teams/{teamId} | Delete a team
[**getTeamById**](TeamsApi.md#getTeamById) | **GET** /api/v1/teams/{teamId} | Get a team by ID
[**leaveUserFromTeam**](TeamsApi.md#leaveUserFromTeam) | **DELETE** /api/v1/teams/{teamId}/members/{userId} | Leave user from team
[**listTeams**](TeamsApi.md#listTeams) | **GET** /api/v1/teams | List all teams
[**teamMembers**](TeamsApi.md#teamMembers) | **GET** /api/v1/teams/{teamId}/members | Get all members of a team
[**updateTeam**](TeamsApi.md#updateTeam) | **PUT** /api/v1/teams/{teamId} | Update a team

<a name="approveUserTeam"></a>
# **approveUserTeam**
> InlineResponse2002 approveUserTeam(teamId, userId)

Approve connected user with team lead

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
let teamId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The ID of the team
let userId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The ID of the user

apiInstance.approveUserTeam(teamId, userId, (error, data, response) => {
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
 **teamId** | [**String**](.md)| The ID of the team | 
 **userId** | [**String**](.md)| The ID of the user | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="connectUserTeam"></a>
# **connectUserTeam**
> InlineResponse2002 connectUserTeam(teamId, userId)

Connect user with team

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
let teamId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The ID of the team
let userId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The ID of the user

apiInstance.connectUserTeam(teamId, userId, (error, data, response) => {
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
 **teamId** | [**String**](.md)| The ID of the team | 
 **userId** | [**String**](.md)| The ID of the user | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTeam"></a>
# **createTeam**
> CreateTeamResponse createTeam(body)

Create a new team

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
let body = new CtfManagementApi.TeamRequest(); // TeamRequest | 

apiInstance.createTeam(body, (error, data, response) => {
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
 **body** | [**TeamRequest**](TeamRequest.md)|  | 

### Return type

[**CreateTeamResponse**](CreateTeamResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTeam"></a>
# **deleteTeam**
> deleteTeam(teamId)

Delete a team

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
let teamId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.deleteTeam(teamId, (error, data, response) => {
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
 **teamId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTeamById"></a>
# **getTeamById**
> TeamResponse getTeamById(teamId)

Get a team by ID

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
let teamId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.getTeamById(teamId, (error, data, response) => {
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
 **teamId** | [**String**](.md)|  | 

### Return type

[**TeamResponse**](TeamResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leaveUserFromTeam"></a>
# **leaveUserFromTeam**
> InlineResponse2002 leaveUserFromTeam(teamId, userId)

Leave user from team

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
let teamId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The ID of the team
let userId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The ID of the user

apiInstance.leaveUserFromTeam(teamId, userId, (error, data, response) => {
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
 **teamId** | [**String**](.md)| The ID of the team | 
 **userId** | [**String**](.md)| The ID of the user | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTeams"></a>
# **listTeams**
> [TeamResponse] listTeams()

List all teams

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
apiInstance.listTeams((error, data, response) => {
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

[**[TeamResponse]**](TeamResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamMembers"></a>
# **teamMembers**
> [UserResponse] teamMembers(teamId)

Get all members of a team

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
let teamId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.teamMembers(teamId, (error, data, response) => {
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
 **teamId** | [**String**](.md)|  | 

### Return type

[**[UserResponse]**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTeam"></a>
# **updateTeam**
> updateTeam(body, teamId)

Update a team

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.TeamsApi();
let body = new CtfManagementApi.TeamRequest(); // TeamRequest | 
let teamId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.updateTeam(body, teamId, (error, data, response) => {
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
 **body** | [**TeamRequest**](TeamRequest.md)|  | 
 **teamId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

