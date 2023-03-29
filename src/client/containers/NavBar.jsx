import { Link } from "react-router-dom"
export const NavBar = () => {
  return (
    // <Fragment>
    <div id="nav-bar-container">
      <div id="nav-links">
        <div id="link-container">
          <Link to="/abc">Test</Link>
          <Link to="/xyz">Burritos</Link>
        </div>
      </div>
      <div id="nav-socials">
        <li ahref="#">FB</li>
        <li ahref="#">IG</li>
        <li ahref="#">TW</li>
        <li id="burger-menu" ahref="#">
          BG
        </li>
      </div>
    </div>
    // </Fragment>
  )
}
