import { Link } from "react-router-dom"
export const NavBar = () => {
  return (
    // <Fragment>
    <div id="nav-bar-container">
      <div id="nav-links">
        <li>
          <Link to="/abc">Test</Link>
        </li>
        <li>
          <Link to="/xyz">Burritos</Link>
        </li>
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
