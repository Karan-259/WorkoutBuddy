M: MongoDB (DataBase)
E: ExpressJS (Backend)
R: ReactJS (Frontend)
N: NodeJS (Backend)

## Frontend (Browser)               Backend (Server)            DataBase

        React App                   ExpressJS + NodeJS           MongoDB


Backend:

# npm init -y

# npm i express / npm install express

# npm i nodemon

# npm i mongoose

# npm i dotenv

## Run: npm run dev


## API Endpoints:

GET           /workouts                 --> Get all the Workout docs
POST          /workouts                 --> Create a new Workout doc
GET           /workouts/:id             --> Get a single workout doc
DELETE        /workouts/:id             --> Delete a single workout doc
PATCH         /workouts/:id             --> Update a single workout doc                

Frontend:
npx create-react-app frontend
