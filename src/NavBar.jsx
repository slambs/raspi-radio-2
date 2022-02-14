import React, { Component } from "react"

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navStyle">
            <a className="nav-item nav-link " href="/">
              Clock
            </a>
            <a className="nav-item nav-link" href="/Radio">
              Radio
            </a>
        </nav>
      </React.Fragment>
    )
  }
}

export default NavBar
