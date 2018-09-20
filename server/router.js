const route = require('express').Router();
// const {db} = require('../db/connect.js');
const _ = require('underscore');

route.get('/', (req, res)=>{
  res.status(200).send();
})

module.exports = {
  route
}
