# Campus Notifications System

## Overview

The Campus Notifications System is a web application that I built using React. It was part of the Afford Medical Technologies Campus Evaluation.

The Campus Notifications System does a things. It gets notifications from an API. Then it sorts them based on how important they're when they were sent. Finally it shows them in a way that's easy to use.

## Features

### Authentication

* The Campus Notifications System uses Bearer Token Authentication.

* It uses access tokens to access the API.

### Notifications

* The Campus Notifications System gets notifications from the API.

* It shows the notifications in a way that's easy for users to understand.

* It only shows the details of each notification.

### Priority Sorting

The Campus Notifications System sorts notifications based on these things:

1. Placement

2. Result

3. Event

If many notifications have the priority the Campus Notifications System sorts them by the latest timestamp.

### Filtering

Users can filter notifications by these options:

* All

* Placement

* Result

* Event

### Pagination

* The Campus Notifications System shows notifications one page at a time.

* It has Next buttons to help users navigate.

### Viewed Notifications

* Users can mark notifications as viewed.

* The Campus Notifications System shows viewed notifications, than new notifications.

### Logging Middleware

* The Campus Notifications System has a logging function.

* It logs things that users do and API operations.

## Technologies Used

* The Campus Notifications System uses React.js

* It uses Vite

* It uses Axios

* It uses JavaScript

* It uses HTML

* It uses CSS

## Project Structure

The project has these files:

src/

├── services/

│ ├── api.js

│ └── logger.js

├── App.jsx

├── main.jsx

└── index.css

## Installation

To install the Campus Notifications System do these steps:

1. Clone the repository

```bash

git clone <repository-url>

```

2. Install the dependencies

```bash

npm install

```

3. Start the development server

```bash

npm run dev

```

4. Build it for production

```bash

npm run build

```

## Author

The author of the Campus Notifications System is Joshitha D.

The Roll Number is VTU26602.