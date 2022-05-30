const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String, required: true },
  Time: { type: Date, default: Date.now() },
});

const TweetsSchema = new Schema({
  data: { type: String, required:true},
  users:{type:Schema.Types.ObjectId,ref:'users'}
})

const Users = mongoose.model('users',userSchema ,'users');

const Tweets = mongoose.model('tweets',TweetsSchema ,'tweets');

const mySchema = {'Users':Users,'Tweets':Tweets};

module.exports = mySchema;

