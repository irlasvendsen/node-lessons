const express = require('express');
const places = require('./routes/places');
const db = require('./models/database');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); 
const port = 4200;


const dbconnect = db.connection;

dbconnect.once('open', ()=>{
    console.log('it is connected to the matrix');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, ()=>{ console.log(`Server is running on port ${port}`)});

app.get('/', (req, res) => { res.send('You asked for a get function')});
app.use('/', places);