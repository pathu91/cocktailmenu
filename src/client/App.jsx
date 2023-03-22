import React from "react"
import ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import { NavBar } from "./containers/NavBar"
import Test from "./containers/test"
import Burrito from "./containers/burrito"
import Home from "./containers/Home"
const App = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/abc" element={<Test />} />
                    <Route path="/xyz" element={<Burrito />} />
                </Routes>
            </Router>
            <Home />
        </>
    )
}

export default App
