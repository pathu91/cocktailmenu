import React from "react"
import CocktailSearch from "./CocktailSearch"
import HomePageBanner from "../components/homeWelcome/HomePageBanner"
const Home = () => {
  return (
    <div id="mainHome">
      <HomePageBanner />
      <CocktailSearch />
    </div>
  )
}

export default Home
