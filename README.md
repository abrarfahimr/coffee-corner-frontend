# Project Title
Coffee Corner Backend

Checkout the video about the site here: https://www.loom.com/share/a7637f39f06b477eb05f58ddd5fb5f73

Note: The website might take time to load because of heroku.

![alt text](/thumbnail-1.png)

![alt text](/thumbnail-2.png)

![alt text](/thumbnail-3.png)
## Description
This is the frontend server for my fullstack capstone project at BrainStation called Coffee Corner. It is a dashboard for a startup company focused on selling different brands of coffee.The goal to help make better business decisions through dynamic data visualization and manage and maintain data on products and customers.

The project was built with two key areas of focus. Data management and Data visualization. Data management using CRUD operation And data visualization with graphs and charts to know how well the business is doing and find areas of high and low potential.

While working I came into some problems and areas of opportunity that I want to highlight from future sprints. First is an opportunity to dynamically update statistics as new transactions happen. Building for real time statistics such as that of salesforce is an important opportunity area to consider so users can immediately see major issues as soon as they happen. One functionality issue I found while creating the product page was the images being imported into a fake directory instead of a public library in the backend server.

### Dependencies
react, react-router-dom, axios, dotenv, uuid, sass, recharts, auth0

### Tech Stack
Frontend: HTML, CSS, Javascript, React
Backend: Node.js, Express, Knex.js
Database: MySQL, MySQL Workbench
Others: Auth0, Recharts, Heroku, Postman

## Installation
Before installing the frontend application please visit the backend github and install the backend server.

 [https://github.com/abrarfahimr/coffee-corner-backend](https://github.com/abrarfahimr/coffee-corner-backend)

 1. clone this repository: 
```
git clone https://github.com/abrarfahimr/coffee-corner-frontend.git
```

2. Create a auth0 account, then go to “Applications” and create a new application. Set a name for the application. Make sure to use “Single Page Application” as the type of application.

https://auth0.com/

3. Once created go to “Settings” and on the “Allowed Callback URLs”, “Allowed Logout URLs”, and “Allowed Web Origins” set the url for your create react app in this case it is “http://localhost:3000”. And save your changes.

4. From the settings you will need the “Domain” and “Client ID” for the application found at the top of the settings tab. This will be added to the .env file.

5. Create a .env file inside the client directory and write the following code:
```
REACT_APP_API_URL=BACKEND_URL
REACT_APP_AUTH0_DOMAIN=USER_AUTH0_DOMAIN
REACT_APP_AUTH0_CLIENT_ID=USER_AUTH0_CLIENT
```
The backend URL is web link to the backend server which you need to setup first.

6. Install node module:
```
npm install
```
7. Start the application:
```
npm start
```
