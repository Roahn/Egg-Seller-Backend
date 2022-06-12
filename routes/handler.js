const express = require('express');
const router = express.Router();
const Schema = require('../models/Schema');

//router.get('/Buy',async (req, res) => {

//})

router.post('/Add', (req, res) => {
  console.log(req.body);
});
router.get('/addUsers', async (req, res) => {
  const user = { username: 'Ankit' };
  const newUser = new Schema.Users(user);

  try {
    await newUser.save(async (err, newUserResult) => {
      console.log('New user Created: ' + JSON.stringify(newUserResult));

      res.end('New user: ' + JSON.stringify(newUserResult));
    });
  } catch (err) {
    console.log(err);
    res.end('User not added: ');
  }
});
router.get('/tweets', (req, res) => {
  const str = [
    {
      name: 'Rohan Magar',
      msg: 'This is my first tweets',
      username: 'Roahn',
    },
  ];
  res.end(JSON.stringify(str));
});

router.post('/addOrder', async (req, res) => {
  obj = {
    Address: '',
    FNAME: '',
    LNAME: '',
    EggsPrice: '',
    PRICE: '',
  };
  obj.Address = req.body.address;
  obj.FNAME = req.body.fname;
  obj.LNAME = req.body.lname;
  obj.COUNT = req.body.Eggs;
  obj.PRICE = req.body.EggsPrice;
  console.log(obj);
  const newOrder = new Schema.Order(obj);
  try {
    await newOrder.save(async (err, newOrderResult) => {
      console.log('New user Created: ' + JSON.stringify(newOrderResult));
    });
  } catch (err) {
    console.log(err);
  }
  res.redirect('/');
});

router.get('/DashData',  async(req, res) => {
  
    const data = Schema.Order;
    const OrderData = await data.find().exec();
    res.end(JSON.stringify(OrderData));
  
});
module.exports = router;
