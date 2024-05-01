# Online Stores - Backend

Skill Test Backend Developer - 10xers

This project builds a secure and versatile backend API using Node.js and Express. It offers RESTful endpoints for data manipulation and leverages the following technologies:

- **REST API:** Provides a standard approach for interacting with resources over HTTP.
- **Express:** A popular Node.js framework for building web applications and APIs.
- **PostgreSQL:** A robust and scalable object-relational database management system (ORDBMS).
- **Sequelize:** An ORM (Object-Relational Mapper) that simplifies interaction between Node.js and PostgreSQL.
- **bcryptjs:** A library for secure password hashing and salting, protecting user passwords.
- **jsonwebtoken (JWT):** Enables authentication and authorization by creating and verifying JSON Web Tokens.
- **pg:** A native Node.js driver for connecting to PostgreSQL databases.
- **axios:** A promise-based HTTP client for making API requests, in this case, to the dummy products API.
- **dotenv:** Facilitates secure management of environment variables outside your codebase.
- **nodemon:** Automatically restarts your Node.js application when code changes occur, streamlining development.
- **sequelize-cli:** A command-line tool for interacting with Sequelize, including generating database migrations.
- **.env File:** Stores sensitive environment variables.
- **.env.example File:** Provides a template for configuring the .env file.

## API Documentation

[API Documentation URL](https://documenter.getpostman.com/view/25307672/2sA3JDi64D)

## Getting Started

### Prerequisites

- Node.js (version 14 or later recommended): https://nodejs.org/en
- npm (Node Package Manager): Typically comes bundled with Node.js
- PostgreSQL (consider using a local instance)

### 1. Clone the Repository

```bash
git clone https://github.com/fauzandwip/test-be_10xers.git
```

### 2. Install Dependencies

```bash
cd test-be_10xers
npm install
```

This will install all the required dependencies, including bcryptjs, jsonwebtoken, and nodemon.

### 3. Configure Environment Variables

1. Create a file named .env in the project's root directory.
2. Copy all environment variables from .env.example into .env file that you created.

All environment variables are like this.

```bash
PORT=

# jsonwebtoken secret key
JWT_SECRET_KEY=

# postgres database
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_HOST=

# user admin
# password admin must be more than or equal to 5 characters
ADMIN_USERNAME=
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

### 4. Run the setup database command-cli:

```bash
npm run setup:db
```

### 5. Start the Development Server (with nodemon)

```bash
npm run dev
```

This will start the server, typically making the REST API accessible on a specific port (e.g., http://localhost:3000).

## Notes

### Dummy Products API

This project leverages the free public API at https://dummyjson.com/products/category/smartphones as a source for sample product data. The dummy products data json already generated. But if you need to generate dummy products, run this command :

```bash
npm run generate:products
```
