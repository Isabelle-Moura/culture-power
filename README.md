# 📜Culture Power - Back-End Project Documentation📜

## 🔷 Special Thanks

**👉 Before we start this documentation, _I would love to dedicate this entire project to_:**

-  ✝ **God, Jesus,** and **Blessed Mary**, _that are my light and my safe harbor._ ✝

-  ❤🤗 The most wonderful and beautiful family that I could have: **Mom, Nana, Jessie, Grandpa, and Grandma**. _I love you guys so, so, so badly!_ ❤🤗

-  🦸‍♂️🤝 And last but not least, to all of my amazing teachers that, pretty much, saved my life in this project: **Profº Victor de Souto Soares, Profº Lucas Perdigão and Monitor Jessie Moura**. 🦸‍♂️🤝

**Without any of you, _I could never do this project_. Thank you so much!🙏💖**

# 🔷 Project Introduction:

**Culture Power** is a gamification application developed for a company, offering an engaging and interactive experience for users.

The platform revolves around three main entities: **Admin**, **User**, and **Product**, each with specific attributes contributing to the system's dynamics.

## 🔷 Entities and Attributes:

#### 🔹 Admin

-  **Name:** string
-  **Email:** string
-  **Password:** string

#### 🔹 Product

-  **Name:** string
-  **Value:** number
-  **Amount:** number
-  **Description:** string
-  **Photo:** string

#### 🔹 User

-  **Name:** string
-  **Email:** string
-  **Password:** string
-  **JewelsAmount:** number
-  **Products:** Product[]
-  **FavoriteProducts:** Product[]
-  **Photo:** string

## 🔷 Use Cases from Each Functionality:

1. 🔹 **User Registration:**

   -  Required information: name, email, password, photo.
   -  Does not allow registration if a user with the same email already exists.
   -  Encrypts the password before storing it in the database.

2. 🔹 **User Login:**

   -  Required information: email and password.
   -  Does not generate a token if there is no user with the provided email.
   -  Does not generate a token if the sent password does not match the one in the database.
   -  Generates a token and returns if the credentials are correct.

3. 🔹 **Admin Login:**

-  Required information: email and password.
-  Does not generate a token if there is no admin with the provided email.
-  Does not generate a token if the sent password does not match the one in the database.
-  Generates a token and returns if the credentials are correct.

4. 🔹 **View Logged-in User (PRIVATE ROUTE):**

   -  Returns the data of the logged-in user.

5. 🔹 **Product Registration (PRIVATE ROUTE - ADMIN):**

   -  Required information: name, value, quantity, description, and photo.
   -  Does not allow submission if the user performing the action is not an administrator.

6. 🔹 **Product Editing (PRIVATE ROUTE - ADMIN):**

   -  Required information: name, value, quantity, description, and photo.
   -  Does not allow submission if the user performing the action is not an administrator.

7. 🔹 **List All Products (PRIVATE ROUTE):**

   -  Lists products with a quantity greater than 0.

8. 🔹 **Search Product by ID (PRIVATE ROUTE):**

   -  ID must be provided.
   -  Returns the product if found.

9. 🔹 **Send Jewel to User (PRIVATE ROUTE - ADMIN):**

   -  Required information: jewel quantity, user ID.
   -  Does not allow sending if the user does not exist.
   -  Does not allow sending if the user performing the action is not an administrator.

10.   🔹 **Redeem Product (PRIVATE ROUTE):**
      -  Required information: product ID, user ID.
      -  Does not allow redemption if the product or user does not exist.
      -  Does not allow redemption if the user does not have enough jewels.
      -  Decreases the product value by the jewel quantity.
      -  Decreases the product quantity.

## 🔷 Project Structure:

The project has been organized using the N-Tier architecture, where each entity has its own folder with the following subdivisions:

-  **controller:** Manages the control logic of the entity.
-  **service:** Contains the business logic of the entity.
-  **repository:** Responsible for interacting with the database.
-  **dto:** Defines data transfer objects.
-  **model:** Represents the structure of the entity.
-  **factory:** Creates instances of entities.
-  **routes:** Defines the entity's routes in the application.
-  **utils:** Contains utilities, including validation with Yup.

## 🔷 Tests:

In addition, unit tests have been implemented in each layer (service, repository, and controller) using the framework **Vitest**.

Unit tests are essential for ensuring the reliability and robustness of the system. They validate individual components, ensuring they function as expected. Benefits of unit testing include early bug's detection, facilitates refactoring and saves some headaches.

## 🔷 Postman Exported File:

[Click here](https://github.com/Isabelle-Moura/project-module-3/blob/main/postman-collection.json) to have access to the Postman's routes file. 

By going to this file, you'll have to go to the options above and click at the "Download raw file". Then, make sure that you import the downloaded file at your client HTTP request app, like Insomnia or Postman. 

## 🔷 Technologies Used in The Project:

The project utilizes the following technologies:

#### 🔹 DevDependencies:

-  @faker-js/faker: Generates fake data for testing purposes.
-  @types/bcrypt: TypeScript type definitions for bcrypt.
-  @types/express: TypeScript type definitions for Express.
-  @types/jest: TypeScript type definitions for Jest.
-  @types/jsonwebtoken: TypeScript type definitions for JSON Web Token.
-  @types/multer: TypeScript type definitions for Multer.
-  @vitest/coverage-v8: Code coverage tool for V8 JavaScript engine.
-  @vitest/ui: UI components for Vitest testing framework.
-  tsup: TypeScript module bundler.
-  tsx: TypeScript execution environment.
-  typescript: TypeScript programming language.

#### 🔹 Dependencies:

-  bcrypt: Library for hashing passwords.
-  dotenv: Module for loading environment variables.
-  express: Web application framework for Node.js.
-  jsonwebtoken: Library for generating and verifying JSON Web Tokens.
-  mongoose: MongoDB object modeling for Node.js.
-  multer: Middleware for handling file uploads.
-  ts-node: TypeScript execution environment for Node.js.
-  vitest: Testing framework for JavaScript and TypeScript.
-  yup: JavaScript schema builder for value parsing and validation.

👉 **Obs: You can find the command to install every dependecy above at the `planning.todo` file.**

## 🔷 Database:

The project utilizes **MongoDB** as the database.

MongoDB is a **NoSQL** database that provides **flexibility and scalability**, making it suitable for applications with evolving requirements.

## 🔷 Commands to Run:

-  Starts the development server using tsx watch.

```bash
npm run dev
```

-  Transpiles code from TS to JS using tsup.

```bash
npm run build
```

-  Starts the production server using compiled JS.

```bash
npm run start
```

-  Runs unit tests using Vitest.

```bash
npm run test
```

-  Seeds the database with initial data using ts-node.

```bash
npm run seed
```

-  Runs tests with code coverage using Vitest coverage tool.
   bash

```bash
npm run coverage
```
