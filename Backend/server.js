require('dotenv').config();

const routesAlum = require('./routes/alumniRoutes');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//Routes
app.use('/api/contents/', routesAlum);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen request
    app.listen(process.env.PORT, () => {
        console.log("Connecting and listening to PORT: ", process.env.PORT)
    });
})
.catch((error) => {
    console.log(error);
})
