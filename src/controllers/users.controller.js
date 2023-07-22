const { createHttpError } = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res, next) => {
    const user= req.body
    const insertedUser = await User.create(user);
    console.log(insertedUser)
    if (!insertedUser) {
        const error = createHttpError('Bad Credentials', 400);
        throw error;
    }


    res.status(201).json({ status: 'success', data: insertedUser });

    
}
const login = async (req, res, next) => {

    const data = req.body
    res.status(201).json({ status: 'success login ', data: data });
}

module.exports = {
    register, login
}



const data = req.body;

const contactDetails = await Contact.create(data);

