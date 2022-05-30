const express = require('express')

const router = express.Router();
const Schema = require('../models/Schema');

router.get('/addUsers',async(req, res) => {
 const user = {username:'Ankit'};
 const newUser = new Schema.Users(user);

 

 try{
   await newUser.save(async(err,newUserResult) => {
     console.log("New user Created: " + JSON.stringify(newUserResult));

     res.end('New user: ' + JSON.stringify(newUserResult));
   });
 }catch(err) {
  console.log(err);
  res.end('User not added: ');
 }
 
})
router.get('/tweets',(req,res) => {
 const str = [{
  "name":"Rohan Magar",
  "msg":"This is my first tweets",
  "username":"Roahn"
 }]
 res.end(JSON.stringify(str));
})

router.post('/addtweets',(req,res) => {
 res.end('NA')
})

module.exports = router;