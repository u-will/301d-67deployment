'use strict';

const { request, response } = require('express');
const express = require('express');
const app = express();
//the port to accept traffic 
const PORT = 3000;

// use this line  don't worry about what is it yet 
app.use(express.static('./public'));


// this is our homePage -> it will serve up a simple file
app.get('/',(requet,response)=>{
  response.sendFile('./public/index.html');
})

//thsi is a "API" route - it is meant to serve up data -> sen
app.get('/test', (request, response)=>{
  response.send('this worked!');
});

// set up my server to accept incoming traffic at specifi PORT
app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
});