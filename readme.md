# Article Listing with Dynamic Filters
## Table of Contents:
- Overview
- Features
- Technologies used
- Usage
- Conclusion

## Overview:
This project consists of a single-page web app that displays a list of articles. The articles are available in a JSON format which are added into MySQL database using Django Models API.

Web App consists of a search bar at top, along with a filters bar. The filters bar can be used to set various filters to the articles displayed such as end year, topic, section, etc. The articles are then displayed below it in the form of cards.

## Features:
The main feature of the app is to display the articles, and apply the corresponding filters to the articles displayed with the use of dropdowns. The React webapp communicates with the backend Django wsing REST API and Cross-Origin Resource Sharing (CORS).

The backend part of the app consists of the following features:
- Storing of the articles from JSON in MySQL database using Models API.
- Get all the articles that are present in the database.
- Send the articles to the backend in JSON format.
- Apply filters to the articles from the database.

The frontend part consists of following features:
- Communicats with the backend using Axiom API.
- Get the list of articles from backend in JSON format.
- Implement filters bar that let user select appropriate filters.
- Send the filters to backend in JSON format and get corresponding articles.

## Technologies Used:
***Backend:***
- **Programming Language:** Python
- Django
- MySQL (Database, accessed using Django Models API)
- `djangorestframework` (For REST API)
- `django-cors-headers` (Cross-Origin Respurce Sharing with the frontend)

***Frontend:***
- **Programming Languages:** HTML, CSS & JS
- React
- Bootstrap & Reactstrap (for styling elements)
- Axios (For REST API using CORS)

## Usage:
This project consists of frontend and backend done seperately. To use this, you should first start both of them separately, and then open the web app.

***Backend:***
First, compile the Django Model and make corresponding MySQL Tables.
```
cd backend

python manage.py makemigrations
python manage.py migrate
```

Then run the backend server:
```
python manage.py runserver
```

This starts a development server at `127.0.0.1:8000/`. The frontent can now communicate with this using Cross-Origin Resourse Sharing (CORS).

***Frontend:***
Change in to the frontend directory and start the npm server.
```
cd frontend
npm start
```

This starts a development server at `localhost:3000` and opens it in the browser. This is the frontend result of the app.

## Conclusion:
This is just a demo project done to demonstrate the use of Django and React to develop a full stack application, and how to properly integrate them using REST API.
