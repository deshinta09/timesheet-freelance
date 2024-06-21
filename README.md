# timesheet-freelance

Timesheet API Documentation

## Endpoint :
List of available endpoints:

- `POST /user/register`
- `POST /user/login`
- `GET /activity`
- `POST /activity`
- `GET /activity/:id`
- `PUT /activity/:id`
- `DELETE /activity/:id`

## 1. POST /user/register
Description:
- Post user to database

Request:
- body
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

_Response (201 - OK)_
```json
{
  "id": "integer",
  "username": "string",
  "email": "string",
  "rate": "integer"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Email must be type email"
}
OR
{
  "message": "Username is require"
}
OR
{
  "message": "Password is require"
}
```
&nbsp;

## 2. LOGIN /user/login
Description:
- Post login from database

- body
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - OK)_
```json
{
  "access_token": "string"
}
```
_Response (400 - Bad Request)_
```json
{
  "message": "Email must be type email"
}
OR
{
  "message": "Password is require"
}
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid email/password"
}
```
&nbsp;

## 3. GET /activity
Description:
- Get all activities from database

Request:
- headers: 
```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_
```json
[
    {
        "id": "integer",
        "tittle": "string",
        "ProjectId": "integer",
        "UserId": "integer",
        "startDate": "date",
        "endDate": "date",
        "startTime": "time",
        "endTime": "time",
        "duration": "time",
        "updatedAt": "date",
        "createdAt": "date"
    }
]
```
&nbsp;


## 4. POST /activity
Description:
- Post activity from database

Request:
- headers: 
```json
{
  "access_token": "string"
}
```

- body
```json
{
    "tittle": "string",
    "ProjectId": "integer",
    "UserId": "integer",
    "startDate": "date",
    "endDate": "date",
    "startTime": "time",
    "endTime": "time"
}
```

_Response (201 - OK)_
```json
{
    "id": "integer",
    "tittle": "string",
    "ProjectId": "integer",
    "UserId": "integer",
    "startDate": "date",
    "endDate": "date",
    "startTime": "time",
    "endTime": "time",
    "duration": "time",
    "updatedAt": "date",
    "createdAt": "date"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Tittle is require"
}
OR
{
  "message": "Start Date is require"
}
OR
{
  "message": "End Date is require"
}
OR
{
  "message": "Start Time is require"
}
OR
{
  "message": "End Time is require"
}
OR
{
  "message": "Duration is require"
}
```

&nbsp;

## 5. GET /activity/:id
Description:
- Get activity by id from database

Request:
- headers: 
```json
{
  "access_token": "string"
}
```

- params:
```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_
```json
{
    "id": "integer",
    "tittle": "string",
    "ProjectId": "integer",
    "UserId": "integer",
    "startDate": "date",
    "endDate": "date",
    "startTime": "time",
    "endTime": "time",
    "duration": "time",
    "updatedAt": "date",
    "createdAt": "date"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```

&nbsp;


## 6. PUT /activity/:id
Description:
- Put activity by id from database

Request:
- headers: 

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

- body
```json
{
    "tittle": "string",
    "ProjectId": "integer",
    "UserId": "integer",
    "startDate": "date",
    "endDate": "date",
    "startTime": "time",
    "endTime": "time"
}
```

_Response (200 - OK)_
```json
{
    "id": "integer",
    "tittle": "string",
    "ProjectId": "integer",
    "UserId": "integer",
    "startDate": "date",
    "endDate": "date",
    "startTime": "time",
    "endTime": "time",
    "duration": "time",
    "updatedAt": "date",
    "createdAt": "date"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Tittle is require"
}
OR
{
  "message": "Start Date is require"
}
OR
{
  "message": "End Date is require"
}
OR
{
  "message": "Start Time is require"
}
OR
{
  "message": "End Time is require"
}
OR
{
  "message": "Duration is require"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```
&nbsp;


## 7. DELETE /activity/:id
Description:
- Delete activity by id from database

Request:
- headers: 
```json
{
  "access_token": "string"
}
```

- params:
```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_
```json
{
  "message": "Success Delete <activity tittle>"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```
&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Login First!"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```