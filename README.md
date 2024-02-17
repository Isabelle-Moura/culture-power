# 📜Culture Power - Project Documentation📜

## 🔷 Special Thanks

### 👉 Before we start this documentation, _I would love to dedicate this entire project to_:

-  ✝ **God, Jesus,** and **Blessed Mary**, that are my light and my safe harbor. ✝
 
-  ❤ The most wonderful and beautiful family that I could have: **Mom, Nana, Jessie, Grandpa, and Grandma**. I love you guys so, so, so badly! ❤
  
-  🦸‍♂️🤝 And last but not least, to all of my amazing teachers that, pretty much, saved my life in this project: **Profº Victor de Souto Soares, Profº Lucas Perdigão and Monitor Jessie Moura**. 🦸‍♂️🤝

## Without any of you, _I could never do this project_. Thank you so much!!!🙏💖

# 🔷 Project Introduction 🚀

**Culture Power** is a gamification application developed for a company, offering an engaging and interactive experience for users. The platform revolves around three main entities: **Admin**, **User**, and **Product**, each with specific attributes contributing to the system's dynamics.

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

## 🔷 Project Structure

The project has been organized using the N-Tier architecture, where each entity has its own folder with the following subdivisions:

-  **controller:** Manages the control logic of the entity.
-  **service:** Contains the business logic of the entity.
-  **repository:** Responsible for interacting with the database.
-  **dto:** Defines data transfer objects.
-  **model:** Represents the structure of the entity.
-  **factory:** Creates instances of entities.
-  **routes:** Defines the entity's routes in the application.
-  **utils:** Contains utilities, including validation with Yup.

In addition, unit tests have been implemented in each layer (service, repository, and controller) to ensure the robustness and reliability of the system.
