# CtfManagementApi.UserRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** | The name of the user | [optional] 
**userName** | **String** | The login of the user | 
**role** | **String** | The role of the user (admin, player or guest) | 
**avatarUrl** | **String** | URL to the user&#x27;s avatar | [optional] 
**status** | **String** | Status of the user (active, disabled) | 
**password** | **String** | User password | 
**teamIds** | **[String]** |  | [optional] 

<a name="RoleEnum"></a>
## Enum: RoleEnum

* `admin` (value: `"admin"`)
* `player` (value: `"player"`)
* `guest` (value: `"guest"`)

