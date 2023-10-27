# Overview

[https://forum-io.fly.dev/](https://forum-io.fly.dev/)

Forum-io is a demo project I used to experiment with Angular and ASP.NET Core. The backend for forum-io can be found at [https://github.com/topiaspeiponen/forum-io-backend](https://github.com/topiaspeiponen/forum-io-backend)

## Development

Requires:<br>
- Node.js version 18.18.2<br>
- NPM version 9.8.1<br>

In order for the API requests to work, both the backend service AND the frontend has to be running in a development environment.

This application can be run locally in many different ways.<br>
1. Run using a local dev server<br>
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.<br>

2. Run using Docker (requires Docker Desktop). Note that the Docker image builds the app in production mode.<br>
Run `docker build -t forum-io-frontend-image .` to build the image.<br>
Run `docker run -d -p 3000:3000 --name forum-io-frontend forum-io-frontend-image` to create the container that is hosted at `http://localhost:3000`.

3. Run using the Express.js server<br>
Run `ng build` to build the project into /dist. Note that if you want to build the app in a development environment, use `ng build --configuration=development`<br>
Run `node server.js` to start the Express.js server that serves by default at `http://localhost:3000`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.
