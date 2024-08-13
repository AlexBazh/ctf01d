# CtfManagementApi.ProfileResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier for the user. | 
**createdAt** | **Date** | The timestamp when the user profile was created. | 
**updatedAt** | **Date** | The timestamp when the user profile was last updated. | [optional] 
**teamName** | **String** | The current name of the user&#x27;s team. | 
**teamRole** | **String** | The current role of the user&#x27;s team. | 
**teamHistory** | [**[TeamHistory]**](TeamHistory.md) | The list of teams the user has been part of, including the periods of membership. | [optional] 

<a name="TeamRoleEnum"></a>
## Enum: TeamRoleEnum

* `owner` (value: `"owner"`)
* `captain` (value: `"captain"`)
* `viceCaptain` (value: `"vice-captain"`)
* `player` (value: `"player"`)
* `guest` (value: `"guest"`)

