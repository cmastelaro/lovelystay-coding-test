# Lovelystay.com | Back-End Coding Test

The bottom line here is to develop a command-line application using NodeJS + TypeScript + PostgreSQL

## Table of Contents

- [Lovelystay.com | Back-End Coding Test](#lovelystaycom--back-end-coding-test)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [Environment Setup](#environment-setup)
    - [Dependencies](#dependencies)
    - [Database](#database)
    - [Build](#build)
    - [Running](#running)

## Introduction

This project is part of the Lovelystay coding test for a back-end position.

## Requirements

1. Fetch information about a given GitHub user (passed as a command-line argument) using the [GitHub API](https://docs.github.com/en/rest), and store it in one or more database tables. The mandatory fields are Name and Location, but you will get bonus points for additional fields.
2. Using a different command-line option, it should be possible to fetch and display all users already in the database (showing them on the command line).
3. Improving on the previous requirement, it should also be possible to list users only from a given location (again, using a command-line option).
4. Finally, the application should also query the programming languages this user seems to know/have repositories with and store them in the database as well. This should allow querying a user by location and/or programming languages.

## Installation

### Environment Setup
* Copy the .env-sample file to .env
* Open .env and set the necessary environment variables
  
### Dependencies
* Run `npm install`

### Database
* Ensure that you already have the postgres database created
* Run `npx db-migrate up` / `db-migrate up`

### Build
* Run `npx tsc` to generate the dist directory, which contains the output converted from TypeScript to JavaScript.

### Running
* Run `node dist/index.js`


..... to be continue....