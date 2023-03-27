import React from "react"

const FeaturedCocktail = () => {
  return (
    <div className="cocktail-function">
      <h1>Featured Cocktail</h1>
      <img
        src="public/images/old-fashioned.jpeg"
        alt="old-fashioned-whiskey"
        className="featured-cocktail-preview"
      ></img>
      <h2>Old Fashioned</h2>
      <button>
        <p>See Recipe</p>
      </button>
    </div>
  )
}

export default FeaturedCocktail
