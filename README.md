# Lovelystay.com | Back-End Coding Test

The bottom line here is to develop a command-line application using NodeJS + TypeScript + PostgreSQL

## Table of Contents

- [Lovelystay.com | Back-End Coding Test](#lovelystaycom--back-end-coding-test)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [How to Use](#how-to-use)
    - [Prerequisites](#prerequisites)
    - [Dependencies](#dependencies)
    - [Environment Setup](#environment-setup)
    - [Database](#database)
    - [Build](#build)
  - [Running the Application](#running-the-application)

## Introduction

This project is part of the Lovelystay coding test for a back-end position.

## Requirements

1. Fetch information about a given GitHub user (passed as a command-line argument) using the [GitHub API](https://docs.github.com/en/rest), and store it in one or more database tables. The mandatory fields are Name and Location, but you will get bonus points for additional fields.
2. Using a different command-line option, it should be possible to fetch and display all users already in the database (showing them on the command line).
3. Improving on the previous requirement, it should also be possible to list users only from a given location (again, using a command-line option).
4. Finally, the application should also query the programming languages this user seems to know/have repositories with and store them in the database as well. This should allow querying a user by location and/or programming languages.

## How to Use

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v12.x or later)
- [npm](https://www.npmjs.com/get-npm) (usually comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/download/)
  
### Dependencies
```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
* Run `npm install`

### Environment Setup

* Copy the .env-sample file to .env
- Open .env and set the necessary environment variables

### Database

* Ensure that you already have the postgres database created
- Run `npx db-migrate up` / `db-migrate up`

### Build

* Run `npx tsc` to generate the dist directory, which contains the output converted from TypeScript to JavaScript.




## Running the Application

* Showing the command-line arguments and options
```
node dist/index.js | node dist/index.js -h | node dist/index.js --help
```

* Getting a user profile from Github and storing into our database
```
node dist/index.js get username
```

* Listing all stored users
```
node dist/index.js show
```

* Listing all stored users filtering by location
```
node dist/index.js show -l location-name
```