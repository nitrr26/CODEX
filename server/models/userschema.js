const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    password: {
        type: String
    },
    cpassword: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    },

    tokens: [
        {
            token: {
                type: String
            }
        }
        
    ]    

})



//hashing password

userSchema.pre('save', async function(next) {
    // console.log("prev methode called");
    if(this.isModified('password')){
        // console.log("prev methode called change");
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});



//tokens
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}


const User = mongoose.model('USER', userSchema);

module.exports = User;