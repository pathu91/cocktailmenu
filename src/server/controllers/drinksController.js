const {response} = require('express');
const fetch = require('node-fetch');

const drinksController = {};

drinksController.searchDrinks = async (req, res, next) => {
  // console.log('searching for drinks with', req.id);
  console.log('in controller');
  // console.log('controller', req.params.id);
  const tempID = req.params.id;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${tempID}`;
  const data = fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      if (data) {
        const listOfDrinks = [];
        data.drinks.forEach((drink) => {
          listOfDrinks.push(drink.strDrink);
        })
        res.locals[tempID] = listOfDrinks;
        return next();
      } else {
        return Promise.reject(data);
      }
    })
    .catch((err) => {
      console.log('error in searchDrinks', err);
      return next({
        log: 'something happened when searching for your drink'
      })
    })
}

module.exports = drinksController;