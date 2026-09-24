const express = require('express')
const WorkoutModel = require('../Models/WorkoutModels')
const { getAllworkout, createWorkout, getWorkout, deleteWorkout, updateWorkout } = require('../Controllers/WorkoutController')
const Router = express.Router()

/**
 * Routes : /api/workouts/
 * Method : GET
 * Description : "Get all the Workout docs"
 * Access: Public
 * Parameters : none
 */
Router.get('/', getAllworkout)

/**
 * Routes : /api/workouts/:id
 * Method : GET
 * Description : "Get a single Workout doc"
 * Access: Public
 * Parameters : id
 */
Router.get('/:id', getWorkout)

/**
 * Routes : /api/workouts/
 * Method : POST
 * Description : "Create a new Workout doc"
 * Access: Public
 * Parameters : none
 */
Router.post('/', createWorkout)

/**
 * Routes : /api/workouts/:id
 * Method : DELETE
 * Description : "Delete a single workout doc"
 * Access: Public
 * Parameters : id
 */
Router.delete('/:id', deleteWorkout)

/**
 * Routes : /api/workouts/:id
 * Method : PATCH
 * Description : "Update a single workout doc "
 * Access: Public
 * Parameters : id
 */
Router.patch('/:id', updateWorkout)


module.exports = Router
