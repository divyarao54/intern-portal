const Intern = require('../models/Intern')
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
};

const registerIntern = async (req, res) => {
    const { name, email, password, referralCode } = req.body;

    try {
        const exists = await Intern.findOne({ email });
        if (exists) return res.status(400).json({message: 'User already exists'});
        const intern = await Intern.create({
            name,
            email,
            password,
            referralCode
        });

        res.status(201).json({
            _id: intern._id,
            name: intern.name,
            email: intern.email,
            referralCode: intern.referralCode,
            token: generateToken(intern._id)
        });
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

const loginIntern = async (req, res) => {
    const { email, password } = req.body;

    try{
        const intern = await Intern.findOne({email});
        if ( !intern || !(await intern.matchPassword(password))){
            return res.status(401).json({message: 'Invalid Credentials'});
        }

        res.json({
            _id: intern._id,
            name: intern.name,
            email: intern.email,
            referralCode: intern.referralCode,
            token: generateToken(intern._id)
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = { registerIntern, loginIntern };