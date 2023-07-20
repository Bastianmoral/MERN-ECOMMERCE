const express = require('express');
const app = express();
const port = 3000;

const apiRoutes = require("./routes/apiRoutes")

app.get('/', async (req, res, next) => {

    res.json({message: "API running..."})
})

// MONGODB CONNECTION 
const connectDB = require("./config/db");
connectDB();


app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

