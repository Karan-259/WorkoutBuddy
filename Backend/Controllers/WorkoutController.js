const WorkoutModel = require("../Models/WorkoutModels");
const mongoose = require('mongoose')

// Get all the Workout docs
exports.getAllworkout = async (req, res) => {
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 })

    if (!workouts)
        return res.status(400).json({
            error: "No Entries Found"
        })

    res.status(200).json(workouts)
}

// Create a new Workout doc
exports.createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await WorkoutModel.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    res.json({
        message: "Create a new Workout doc"
    })
}

//  Get a single workout doc
exports.getWorkout = async (req, res) => {
    const { id } = req.params;

    //when you entered any other id like - 1234
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }

    const workout = await WorkoutModel.findById(id)
    if (!workout)
        return res.status(404).json({ error: "No such Workout" })

    res.status(200).json(workout)
}

//    Delete a single workout doc
exports.deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }

    const workout = await WorkoutModel.findByIdAndDelete(id);

    if (!workout)
        return res.status(404).json({ error: "No such Workout to delete" })

    res.status(200).json(workout)
}

//   Update a single workout 
exports.updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }

    const workout = await WorkoutModel.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
    )

    if (!workout)
        return res.status(404).json({ error: "No such Workout" })

    res.status(200).json(workout)
}