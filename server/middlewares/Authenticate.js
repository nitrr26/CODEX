const jwt = require("jsonwebtoken")
const User = require('../models/userschema')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const Authenticate = async (req, res, next) => {

    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        console.log(verifyToken);
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});
        console.log(rootUser);
        if(!rootUser) {throw new Error('User not found')}
        
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();


    }catch (err) {
        res.status(401).send('Unauthorized: No token provided');
        console.log("i got error");
    }
};

module.exports = Authenticate;

