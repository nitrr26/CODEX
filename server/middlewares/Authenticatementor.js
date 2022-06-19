const jwt = require("jsonwebtoken")
const Mentor = require('../models/mentorschema')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const Authenticatementor = async (req, res, next) => {

    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        console.log(verifyToken);
        const rootMentor = await Mentor.findOne({_id: verifyToken._id, "tokens.token": token});
        console.log(rootMentor);
        if(!rootUser) {throw new Error('User not found')}
        
        req.token = token;
        req.rootMentor = rootMentor;
        req.mentorID = rootMentor._id;
        next();


    }catch (err) {
        res.status(401).send('Unauthorized: No token provided');
        console.log("i got error");
    }
};

module.exports = Authenticatementor;

