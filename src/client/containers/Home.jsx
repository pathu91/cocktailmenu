import React, { Fragment } from "react"
import FeaturedCocktail from "../components/FeaturedCocktail"

const Home = () => {
  return (
    <div id="mainHome">
      <div id="featured-container">
        <div id="featured-cocktail">
          <h3>Lorem ipsum something possum</h3>
          <button>Go to the possum</button>
        </div>
        <div id="featured-accent-box">
          <h3>peanut</h3>
        </div>
      </div>
      <div id="featured-cocktail-button-container">
        <h2>Our favorite cocktails</h2>
      </div>
      <Fragment>
        <FeaturedCocktail />
        <div className="cocktail-function">
          <h1>Search By Name</h1>
        </div>
        <div className="cocktail-function">
          <h1>Search By Ingredient</h1>
        </div>
        <div className="cocktail-function">
          <h1>Surprise Me</h1>
        </div>
      </Fragment>
    </div>
  )
}

export default Home
