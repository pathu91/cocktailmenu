const express = require('express');
const router = express.Router();
const drinksController = require('../controllers/drinksController');

router.get('/search/:id', drinksController.searchDrinks, (req, res, next) => {
  console.log('inside route')
  // console.log('route\'s reqid', req.params.id);
  console.log(res.locals)
  const test = {
    data: res.locals[req.params.id]
  }
  console.log('im data', test);
  test.data.forEach((thing) => {
    console.log('im thing, ' , thing);
  })
  return res.status(200).json({data: res.locals[req.params.id]})
})

module.exports = router;