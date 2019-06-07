import {Application} from 'express';
import {User} from "../app/models/User";;
const bodyParser = require('body-parser');
const express = require('express');

const app: Application = express();

app.use(bodyParser.json());


console.log('Starting server ...');


app.route('/api/newsletter').post(newsletterRoute);
app.route('/api/login').post(loginRoute);


app.listen(8090, () => {
  console.log('Server is now running on port 8090 ...');
});

function newsletterRoute(req, res) {

  const payload = req.body;

  console.log('subscribing to newsletter ...', payload.email);

  res.status(200).send();
}




const auth = {
  'john@gmail.com': 'test123',
  'bill@gmail.com': 'test456'

};

const users: {[key:string]: User} = {
  'john@gmail.com': {
    firstName: 'John'
  },
  'bill@gmail.com': {
    firstName: 'Bill'
  }
};

function loginRoute(req, res) {


  const payload = req.body;

  console.log('verifying password ...', payload);


  if (auth[payload.email] && auth[payload.email] === payload.password) {
    res.status(200).json(users[payload.email]);
  }
  else {
    res.sendStatus(500);
  }




}
