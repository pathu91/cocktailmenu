import React from "react"
import FeaturedCocktail from "../components/cocktailSearch/FeaturedCocktail"

const CocktailSearch = () => {
  return (
    <div>
      <div id="cocktail-search-container">
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
      </div>
    </div>
  )
}

export default CocktailSearch
