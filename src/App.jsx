
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import React, { Component } from "react"

import Clock from "./Clock"
import NavBar from "./NavBar"
import Radio from "./Radio"
import Temp from "./Temp";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/radio" element={<Radio />}></Route>
            <Route path="/" element={<Clock />}></Route>
          </Routes>
          <Temp/>
        </div>
      </Router>
    )
  }
}



