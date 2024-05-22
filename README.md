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
  - [Running Tests](#running-tests)
  - [Final Considerations](#final-considerations)
    - [Commander](#commander)
    - [db-migrate](#db-migrate)
    - [db-migrate-pg](#db-migrate-pg)
    - [Jasmine](#jasmine)
    - [Axios](#axios)
    - [Conclusion](#conclusion)

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

- Run `npm install`

### Environment Setup

- Copy the .env-sample file to .env
- Open .env and set the necessary environment variables

### Database

- Ensure that you already have the postgres database created

- Run `npx db-migrate up` / `db-migrate up`

### Build

- Run `npx tsc` to generate the dist directory, which contains the output converted from TypeScript to JavaScript.

## Running the Application

- Showing the command-line arguments and options

```sh
node dist/index.js | node dist/index.js -h | node dist/index.js --help
```

- Getting a user profile from Github and storing into our database

```sh
node dist/index.js get username
```

- Listing all stored users

```sh
node dist/index.js show
```

- Listing all stored users filtering by location

```sh
node dist/index.js show -l location-name
```

## Running Tests

- To run jasmine test suite

```sh
npm test
```

## Final Considerations

In this project, several technologies and libraries were selected to ensure robust functionality, ease of use, and maintainability. Here are some final thoughts on each:

### Commander

[Commander](https://github.com/tj/commander.js) was chosen for command-line interface (CLI) handling due to its simplicity and comprehensive feature set. It allows for the easy definition of commands and options, making our CLI tools intuitive and user-friendly. Its extensive documentation and active community support further reinforce its reliability.

### db-migrate

[db-migrate](https://github.com/db-migrate/node-db-migrate) serves as our database migration framework. It provides a structured approach to database versioning, ensuring consistency across different environments. The plugin system of db-migrate allows for flexible adaptation to various database systems, and its CLI makes managing migrations straightforward.

### db-migrate-pg

[db-migrate-pg](https://github.com/db-migrate/pg) is the PostgreSQL plugin for db-migrate. This plugin integrates seamlessly with db-migrate, leveraging PostgreSQL-specific features and ensuring efficient database operations. Its compatibility and ease of use make it an essential component for projects using PostgreSQL.

### Jasmine

[Jasmine](https://jasmine.github.io/) was selected for unit testing due to its behavior-driven development (BDD) approach, which enhances readability and maintainability of tests. Jasmine's syntax is clean and simple, allowing developers to write tests that clearly describe application behavior. Additionally, its rich feature set supports a wide range of testing scenarios without requiring additional plugins or configurations.

### Axios

[Axios](https://axios-http.com/) is our choice for HTTP client operations. Known for its promise-based HTTP requests, Axios simplifies asynchronous operations and error handling. It supports request and response interception, transformation of data, and automatic JSON data handling, making it a versatile tool for interacting with external APIs.

### Conclusion

The combination of these technologies provides a solid foundation for building and maintaining the project. Commander and Jasmine enhance development efficiency, while db-migrate and db-migrate-pg ensure reliable database management. Axios offers robust and easy-to-use HTTP client capabilities. Together, they contribute to a well-rounded and maintainable codebase, enabling us to deliver a high-quality application.
