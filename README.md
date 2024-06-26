# timesheet-freelance

Timesheet API Documentation

## Prerequisites
- Install npm
- Install node.js
- Install javascript
- postgressql


## Getting Started

Clone the repo: 
```
clone https://github.com/deshinta09/timesheet-freelance.git
cd timesheet-freelance
```

Install dependencies client:
```
cd client/
npm install
```

Install dependencies server:
```
cd server/
npm install
```

Create Database With Postgres
```
cd server/
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

Start server:
```
node --watch app.js
```
OR
```
npx nodemon app.js
```

Start client:
```
npm run dev
```

## Endpoint Server :
List of available endpoints:

- `POST /user/register`
- `POST /user/login`
- `GET /user`
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

## 2. POST /user/login
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

## 3. GET /user
Description:
- Get user from database

Request:
- headers: 
```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_
```json
{
  "username": "string",
  "rate": "integer",
  "duration": "time",
  "income": "integer"
}
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid email/password"
}
```
&nbsp;

## 4. GET /activity
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


## 5. POST /activity
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

## 6. GET /activity/:id
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


## 7. PUT /activity/:id
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


## 8. DELETE /activity/:id
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