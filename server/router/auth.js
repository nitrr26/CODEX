const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookies = require('cookie-parser')

router.use(cookies())
const Authenticate = require('../middlewares/Authenticate')
const Authenticatementor = require('../middlewares/Authenticatementor')


// const cors = require('cors');
// router.use(
//     cors({
//         origin: "http://localhost:5000"
//     })
// )



require('../db/connection')
const User = require('../models/userschema');
const Mentor = require('../models/mentorschema');
router.post('/register/user', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;
    // console.log(req.body);

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(423).json({ error: "error" })
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password missmatch" });
        }
        else {
            const user = new User({ name, email, phone, password, cpassword });
            await user.save();
            res.status(201).json({ message: "Registered successfully" });
        }

    } catch (err) {
        console.log(err);
    }


});



router.post('/register/mentor', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;
    // console.log(req.body);
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(423).json({ error: "error" })
    }

    try {
        const mentorExist = await Mentor.findOne({ email: email });
        if (mentorExist) {
            return res.status(422).json({ error: "email already exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password missmatch" });
        }
        else {
            const mentor = new Mentor({ name, email, phone, password, cpassword });
            await mentor.save();
            res.status(201).json({ message: "Registered successfully" });
        }

    } catch (err) {
        console.log(err);
    }


});




router.post('/login/user', async (req, res) => {
    // console.log(req.body);
    // res.json({message: "done"});

    try {
        let token;

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ error: "All field require.." });
        }

        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin);

        if (userLogin) {
            const isSame = await bcrypt.compare(password, userLogin.password);


            //token
            token = await userLogin.generateAuthToken();
            // console.log(token)

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });


            if (!isSame) {
                res.status(400).json({ message: "invalid credintial" })
            }
            else {
                res.json({ message: "Login successsful" });
            }

        }
        else {
            console.log("email not found");
            res.status(400).json({ message: "go to registration page" });
        }

    } catch (err) {
        console.log(err);
    }

});




router.post('/login/mentor', async (req, res) => {
    // console.log(req.body);
    // res.json({message: "done"});

    try {
        let token;

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ error: "All field require.." });
        }

        const mentorLogin = await Mentor.findOne({ email: email });

        // console.log(userLogin);

        if (mentorLogin) {
            const isSame = await bcrypt.compare(password, mentorLogin.password);


            //token
            token = await mentorLogin.generateAuthToken();
            // console.log(token)

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });


            if (!isSame) {
                res.status(400).json({ message: "invalid credintial" })
            }
            else {
                res.json({ message: "Login successsful" });
            }

        }
        else {
            console.log("email not found");
            res.status(400).json({ message: "go to registration page" });
        }

    } catch (err) {
        console.log(err);
    }

});




//about us

router.get('/about', Authenticate, (req, res) => {
    // console.log("about");
    // console.log(req.rootUser);
    res.send(req.rootUser);

});



// get data
router.get('/getdata/user', Authenticate, (req, res) => {
    console.log("contact test");
    res.send(req.rootUser);

});

router.get('/getdata/mentor', Authenticatementor, (req, res) => {
    console.log("contact test");
    res.send(req.rootMentor);

});


//contact data
router.post('/contact', Authenticate, async (req, res) => {
    try {

        const { name, email, message } = req.body;
        console.log(req.body);

        if (!name || !email || !message) {
            console.log(`please fill the complete form `);
            alert('please fill the complete form')
            return res.json({ error: "please fill the complete form " })
        }

        const userContact = await User.findOne({_id:req.userID})

        console.log(userContact);

        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, message);

            await userContact.save();
            res.status(201).json({ message: "contacted.." })
        }


    } catch (err) {
        console.log(err);
    }

});





router.get('/logout', Authenticate, (req, res) => {
    console.log("logout");
    // console.log(req.rootUser);
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send("user logout");

});


module.exports = router;