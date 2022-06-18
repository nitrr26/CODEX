const mongoose = require('mongoose')

const db = process.env.DATABASE;

mongoose.connect(db).then(() => {
    console.log("connection succesfull")
}).catch((err) => console.log("no connection"));

