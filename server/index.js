const express = require('express');
const passort = require('passport');
const cors = require('cors');
// const bodyParse = require('body-parser');
require('./src/passport');

//Route Imports
const userRoutes = require('./src/routes/userRoutes')
const recipeController = require('./src/routes/recipeRoutes');
const path = require('path');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(passort.initialize());
app.use(express.json());

app.post("/",(req,res)=>{
    console.log(req.body.email)
    res.send(req.body.email);
})

app.use("/user",userRoutes);
app.use("/recipe",recipeController);



// app.use((err,req,res)=>{
//     console.log(err);
//     res.status(501).json({err});
// })


app.listen(process.env.PORT||8080,()=>{
    console.log("[server]:-http://localhost:8080/")
})