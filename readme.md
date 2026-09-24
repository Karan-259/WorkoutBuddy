# MERN Stack Project

| Letter | Technology | Role |
| --- | --- | --- |
| M | MongoDB | DataBase |
| E | ExpressJS | Backend |
| R | ReactJS | Frontend |
| N | NodeJS | Backend |

## Architecture

| Frontend (Browser) | Backend (Server) | DataBase |
| --- | --- | --- |
| React App | ExpressJS + NodeJS | MongoDB |

## Backend

### Installation

```bash
npm init -y
npm i express
npm i nodemon
npm i mongoose
npm i dotenv
```

### Run

```bash
npm run dev
```

### API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/workouts` | Get all the Workout docs |
| POST | `/workouts` | Create a new Workout doc |
| GET | `/workouts/:id` | Get a single workout doc |
| DELETE | `/workouts/:id` | Delete a single workout doc |
| PATCH | `/workouts/:id` | Update a single Workout doc |

## Frontend

```bash
npx create-react-app frontend
```
