const mongoose = require('mongoose')
const UserModel = require('../Models/UserModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

exports.login = async(req, res) => {
    const {email, password} = req.body

    try{
        const user = await UserModel.login(email,password)

        const token = createToken(user._id)

        res.status(200).json({email, token})

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

exports.signup = async(req, res) => {

    const {email, password} = req.body

    try{
        const user = await UserModel.signup(email, password)
        
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }

}