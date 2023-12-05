require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


app.listen(process.env.PORT, () => {
    console.log('Connected to DB & listening on port ', process.env.PORT);
})
