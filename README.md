# Nutrition Application


<img src="https://github.com/comp227/final-mosaic/blob/main/frontend/src/images/HomePage.png" width="700" height="400">
**Website Link** - https://nutrition-app-dfkb.onrender.com


# Table of Contents

- [Overview](#overview)
- [Features/Functionality](#featuresfunctionality)
- [Technical Stack (Libraries or Technologies)](#technical-stack-libraries-or-technologies)
  - [Front End](#front-end)
  - [Back End](#back-end)
- [Setup (Download and Run Project)](#setup-download-and-run-project)
- [What's Still Missing](#whats-still-missing)
- [Individual Contributors](#individual-contributors)
- [Contributors](#contributors)
- [Mentor](#mentor)


## Overview 
This website is intended to allow users to view and favorite various healthy meals that they would like to cook and eat for a healthier lifestyle. Here you can find various different meals that have information listed such as cook time, calories, and ingredients all in one convenient place and sort/filter the selection as you like.

## Features/Functionality 
- **Meal Plans**
Meal Plans are displayed with the Calories, Ingredients, Cook Time. When we click on the image then it is redirected to the You Tube to show the reciepe.
<img src="https://github.com/comp227/final-mosaic/blob/main/frontend/src/images/MealList.png" width="700" height="400">

- **Suggest A New Meal**
In this users can suggest a new meal plan which they wanted to see.
<img src="https://github.com/comp227/final-mosaic/blob/main/frontend/src/images/SuggestMeal.png" width="700" height="400">

- **Adding the Meals to Favorite**
In this the users can add the meals to their favorite list.
<img src="https://github.com/comp227/final-mosaic/blob/main/frontend/src/images/favourite.png" width="700" height="400">

- **Searching and Sorting the Meal Plans**
In this application we can search and sort the meals based on the calories, cook time and Ingredients.
<img src="https://github.com/comp227/final-mosaic/blob/main/frontend/src/images/favourite.png" width="700" height="400">

- **Login**
The users can login into the website using the username and password.
<img src="https://github.com/comp227/final-mosaic/blob/main/frontend/src/images/Login.png" width="700" height="400">

## Technical Stack (Libraries or Technologies)
The technical stack which we have used in the website are listed below:
### Front End 
- [HTML](https://html.com/) A markup language which does the basic stucturing of the website.
- [CSS](https://www.w3schools.com/css/) a style sheet language used for defining the appearance of the website.
- [React](https://github.com/facebook/react) The front end framework of the website is based on this.

### Back End 
- [NodeJS](https://github.com/nodejs)
- [MongoDB](https://github.com/mongodb/mongo)
- [Express](https://expressjs.com/)
- [ESLint](https://github.com/eslint)
- [CORS](https://github.com/expressjs/cors)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [dotenv](https://github.com/dotenv-rs/dotenv)
- [prop-types](https://github.com/facebook/prop-types)
- [Node Package Manager (npm)](https://github.com/npm/npm)
- [Axios](https://github.com/axios/axios)
- [Nodemon](https://github.com/remy/nodemon)

**Tools**
- [Webstorm IDE](https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=9641686293&term=webstorm&content=523713720609&gad=1&gclid=Cj0KCQjw6cKiBhD5ARIsAKXUdyYBCOEpQ1Vu8VdLrDgeOTfQE95RbTGlOssQYrNfdb3o-2Xuh2lp8H0aAtvbEALw_wcB)
- [Git](https://git-scm.com/)

## Setup (Download and Run Project)
- Fork and clone the repository.
- Run 'npm install' to install dependencies.
- Start application using 'npm start' from the frontend folder.
- Start server using 'npm run dev' from the main folder for the backend.
- Access the page using localhost with the assigned port value (http://localhost:3000/).

**NOTE:** Connection to the Port and MongoDB is all determined in a private `.env` file. When running the program on your personal device through Webstorm, it is required that the user creates a `.env` file in the root directory of the project and add the following information:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.iy9ldiy.mongodb.net/nutritionApp?retryWrites=true&w=majority
PORT=3001
SECRET=<any random text here>
```
## What's Still Missing
Currently adding favorite meals is not being saved based on the users. This needs to be fixed.
- Still the serach functionality needs to be fixed as mention in this issuse.
Issue: 
https://github.com/comp227/final-mosaic/issues/5

- Adding this functiionality with the excercises needs to implemented.
Issue: 
https://github.com/comp227/final-mosaic/issues/7


## Conclusion 
In conclusion, the nutrition application developed using React, Node.js, Express, CORS, ESLint, and MongoDB provides users with an efficient platform to browse and save healthy meal options. The application allows users to view various meals with information such as cook time, calories, and ingredients, all in one convenient place, and sort/filter the selection as per their preferences. Additionally, users can create accounts to save their favorite meals and add new ones to the database.
The application's front-end is developed using React, which provides a modern and responsive user interface. The back-end is implemented using Node.js and Express, which provide a robust and scalable server-side solution. MongoDB is used as the database to store the meal information and user data.
Overall, the nutrition application provides a user-friendly experience and encourages users to adopt a healthier lifestyle by making healthy meal options readily available and easy to access.

## Individual Contributors


## Contributors

Following are the contributors for this project: 

<ul>
  <li><a href="https://github.com/Alex-Hum">Alexandra Hum</a></li>
  <li><a href="https://github.com/rituramakrihnan">Ritu Ramakrishnan</a></li>
  <li><a href="https://github.com/Vkanw">Vanessa Kan</a></li>
 </ul>
 
## Mentor
<a href="https://github.com/onzfonz">Osvaldo Jimenez</a></li>
