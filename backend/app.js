const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();


app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.status(200).send('The API is working!');
})

module.exports = app;