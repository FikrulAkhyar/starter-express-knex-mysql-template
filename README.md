# Starter Express Knex MySQL Template

This is a starter template for building REST APIs using **Express.js**, **Knex.js**, and **MySQL**. It is structured for rapid development and includes features such as file uploads, authentication, and environment configuration.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Scripts](#scripts)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FikrulAkhyar/starter-express-knex-mysql-template.git
   cd starter-express-knex-mysql-template

2. Install dependencies:
    ```bash
    bun install

## Setup

1. Create a .env file in the root directory based on .env.example. Ensure you provide the correct values for your environment variables:

    ```makefile
    DB_HOST=your-database-host
    DB_USER=your-database-username
    DB_PASS=your-database-password
    DB_NAME=your-database-name
    JWT_SECRET=your-secret-key
    PORT=3000

2. Set up the MySQL database by running the migrations:

    ```bash
    bun run migrate

## Running Project

To run the project locally, use the following command:

    bun run dev

This will start the server in hot-reload mode. The application will be available at http://localhost:3000.

## Environment Variables
    The project uses the following environment variables:
    DB_HOST: Database host (e.g., localhost)
    DB_USER: Database username
    DB_PASS: Database password
    DB_NAME: Database name
    JWT_SECRET: Secret key used for JWT token signing
    PORT: The port the server will listen on (default: 3000)

## Project Structure
    src/
    ├── configs/db
    │   └── knexfile.js                # Database configuration
    │    
    ├── controllers/              # All controllers
    ├── migrations/               # All migrations
    ├── seeds/                    # All seeders
    ├── routers/                  # All API routes
    ├── services/                 # All services
    └── utils/                    # Utility functions like JWT handling
    server.js                 # Server entry point


## Scripts
    dev: Runs the project in hot-reload mode.
    start: Starts the project in production mode.
    migrate:make: Creates a new migration file.
    migrate:rollback: Rolls back the last migration.
    migrate: Runs the latest migrations.
    seed: Runs the database seeders.
    seed:make: Creates a new seed file.




