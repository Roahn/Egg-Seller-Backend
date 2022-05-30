const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler');
const req = require('express/lib/request');
const mongoose =require('mongoose');
require('dotenv/config');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routesHandler);
const PORT =process.env.PORT ||4000;


//DB Connection

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}).then(()=>{

 console.log('Connection to mongoose is established');
}).catch(err => console.log(err))
;

app.listen(PORT,()=>{
 console.log('Server is listening on port '+PORT);
});