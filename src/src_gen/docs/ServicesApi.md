# CtfManagementApi.ServicesApi

All URIs are relative to *https://ctf01d.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createService**](ServicesApi.md#createService) | **POST** /api/v1/services | Create a new service
[**deleteService**](ServicesApi.md#deleteService) | **DELETE** /api/v1/services/{serviceId} | Delete a service
[**getServiceById**](ServicesApi.md#getServiceById) | **GET** /api/v1/services/{serviceId} | Get a service by ID
[**listServices**](ServicesApi.md#listServices) | **GET** /api/v1/services | List all services
[**updateService**](ServicesApi.md#updateService) | **PUT** /api/v1/services/{serviceId} | Update a service
[**uploadChecker**](ServicesApi.md#uploadChecker) | **POST** /api/v1/services/{serviceId}/checker | Upload zip-archive
[**uploadService**](ServicesApi.md#uploadService) | **POST** /api/v1/services/{serviceId}/service | Upload zip service

<a name="createService"></a>
# **createService**
> CreateServiceResponse createService(body)

Create a new service

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ServicesApi();
let body = new CtfManagementApi.ServiceRequest(); // ServiceRequest | 

apiInstance.createService(body, (error, data, response) => {
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
 **body** | [**ServiceRequest**](ServiceRequest.md)|  | 

### Return type

[**CreateServiceResponse**](CreateServiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteService"></a>
# **deleteService**
> deleteService(serviceId)

Delete a service

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ServicesApi();
let serviceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.deleteService(serviceId, (error, data, response) => {
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
 **serviceId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getServiceById"></a>
# **getServiceById**
> ServiceResponse getServiceById(serviceId)

Get a service by ID

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ServicesApi();
let serviceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.getServiceById(serviceId, (error, data, response) => {
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
 **serviceId** | [**String**](.md)|  | 

### Return type

[**ServiceResponse**](ServiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listServices"></a>
# **listServices**
> [ServiceResponse] listServices()

List all services

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ServicesApi();
apiInstance.listServices((error, data, response) => {
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

[**[ServiceResponse]**](ServiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateService"></a>
# **updateService**
> updateService(body, serviceId)

Update a service

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ServicesApi();
let body = new CtfManagementApi.ServiceRequest(); // ServiceRequest | 
let serviceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.updateService(body, serviceId, (error, data, response) => {
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
 **body** | [**ServiceRequest**](ServiceRequest.md)|  | 
 **serviceId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="uploadChecker"></a>
# **uploadChecker**
> uploadChecker(file, serviceId)

Upload zip-archive

Handler for upload zip-archive with checker 

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ServicesApi();
let file = "file_example"; // Blob | 
let serviceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.uploadChecker(file, serviceId, (error, data, response) => {
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
 **file** | **Blob**|  | 
 **serviceId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadService"></a>
# **uploadService**
> uploadService(file, serviceId)

Upload zip service

Upload zip archive with service code images and etc... 

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.ServicesApi();
let file = "file_example"; // Blob | 
let serviceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.uploadService(file, serviceId, (error, data, response) => {
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
 **file** | **Blob**|  | 
 **serviceId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

