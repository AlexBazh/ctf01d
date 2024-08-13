# CtfManagementApi.UniversityApi

All URIs are relative to *https://ctf01d.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUniversities**](UniversityApi.md#listUniversities) | **GET** /api/v1/universities | Retrieves a list of universities

<a name="listUniversities"></a>
# **listUniversities**
> UniversitiesResponse listUniversities(opts)

Retrieves a list of universities

This endpoint retrieves universities. It can optionally filter universities that match a specific term. 

### Example
```javascript
import {CtfManagementApi} from 'ctf_management_api';

let apiInstance = new CtfManagementApi.UniversityApi();
let opts = { 
  'term': "term_example" // String | Optional search term to filter universities by name.
};
apiInstance.listUniversities(opts, (error, data, response) => {
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
 **term** | **String**| Optional search term to filter universities by name. | [optional] 

### Return type

[**UniversitiesResponse**](UniversitiesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

