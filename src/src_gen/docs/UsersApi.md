# CtfManagementApi.UsersApi

All URIs are relative to *https://ctf01d.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /api/v1/users | Create a new user
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /api/v1/users/{userId} | Delete a user
[**getProfileById**](UsersApi.md#getProfileById) | **GET** /api/v1/users/{userId}/profile | Get a profile by user ID
[**getUserById**](UsersApi.md#getUserById) | **GET** /api/v1/users/{userId} | Get a user by ID
[**listUsers**](UsersApi.md#listUsers) | **GET** /api/v1/users | List all users
[**uniqueAvatar**](UsersApi.md#uniqueAvatar) | **GET** /api/v1/avatar/{username} | Get a unique avatar for the username
[**updateUser**](UsersApi.md#updateUser) | **PUT** /api/v1/users/{userId} | Update a user

<a name="createUser"></a>
# **createUser**
> CreateUserResponse createUser(body)

Create a new user

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.UsersApi();
let body = new CtfManagementApi.UserRequest(); // UserRequest | 

apiInstance.createUser(body, (error, data, response) => {
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
 **body** | [**UserRequest**](UserRequest.md)|  | 

### Return type

[**CreateUserResponse**](CreateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

Delete a user

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.UsersApi();
let userId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.deleteUser(userId, (error, data, response) => {
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
 **userId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProfileById"></a>
# **getProfileById**
> ProfileResponse getProfileById(userId)

Get a profile by user ID

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.UsersApi();
let userId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.getProfileById(userId, (error, data, response) => {
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
 **userId** | [**String**](.md)|  | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserById"></a>
# **getUserById**
> UserResponse getUserById(userId)

Get a user by ID

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.UsersApi();
let userId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.getUserById(userId, (error, data, response) => {
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
 **userId** | [**String**](.md)|  | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUsers"></a>
# **listUsers**
> [UserResponse] listUsers()

List all users

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.UsersApi();
apiInstance.listUsers((error, data, response) => {
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

[**[UserResponse]**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="uniqueAvatar"></a>
# **uniqueAvatar**
> &#x27;Blob&#x27; uniqueAvatar(username, opts)

Get a unique avatar for the username

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.UsersApi();
let username = "username_example"; // String | 
let opts = { 
  'max': 56, // Number | 
  'blockSize': 56, // Number | 
  'steps': 56 // Number | 
};
apiInstance.uniqueAvatar(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **max** | **Number**|  | [optional] 
 **blockSize** | **Number**|  | [optional] 
 **steps** | **Number**|  | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png

<a name="updateUser"></a>
# **updateUser**
> updateUser(body, userId)

Update a user

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.UsersApi();
let body = new CtfManagementApi.UserRequest(); // UserRequest | 
let userId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.updateUser(body, userId, (error, data, response) => {
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
 **body** | [**UserRequest**](UserRequest.md)|  | 
 **userId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

