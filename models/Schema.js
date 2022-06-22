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


const OrderSchema = new Schema({
  FNAME: { type: String, required: true },
  // LNAME:{ type: String, required: true},
  Address: { type: String, required: true },
  COUNT: { type: String, required: true },
  PRICE: { type: String, required: true },
  UID: { type: String, required: true },
  EMAIL: { type: String, required: true },
  status: { type: String, default: '0' },
});

const Users = mongoose.model('users',userSchema ,'users');

const Tweets = mongoose.model('tweets',TweetsSchema ,'tweets');

const Order = mongoose.model('orders', OrderSchema, 'orders');

const mySchema = {'Users':Users,'Tweets':Tweets , 'Order':Order};

module.exports = mySchema;

