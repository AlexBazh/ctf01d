# CtfManagementApi.SessionsApi

All URIs are relative to *https://ctf01d.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signInUser**](SessionsApi.md#signInUser) | **POST** /api/v1/auth/sign_in | Sign in user
[**signOutUser**](SessionsApi.md#signOutUser) | **POST** /api/v1/auth/sign_out | Sign out user
[**validateSession**](SessionsApi.md#validateSession) | **GET** /api/v1/auth/session | Validate current session and return user role

<a name="signInUser"></a>
# **signInUser**
> InlineResponse200 signInUser(body)

Sign in user

Authenticates a user by user_name and password, starts a new session, and returns a session cookie.

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.SessionsApi();
let body = new CtfManagementApi.AuthSignInBody(); // AuthSignInBody | 

apiInstance.signInUser(body, (error, data, response) => {
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
 **body** | [**AuthSignInBody**](AuthSignInBody.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signOutUser"></a>
# **signOutUser**
> InlineResponse2001 signOutUser()

Sign out user

Authenticates a user by user_name and password, starts a new session, and returns a session cookie.

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.SessionsApi();
apiInstance.signOutUser((error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validateSession"></a>
# **validateSession**
> SessionResponse validateSession()

Validate current session and return user role

Check if the current session is valid and return the user&#x27;s role.

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.SessionsApi();
apiInstance.validateSession((error, data, response) => {
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

[**SessionResponse**](SessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

