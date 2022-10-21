import React, { Component } from "react"

class NavBar extends Component {
  render() {
    return (
      <>
        <nav>
            <a className='navbarItem1' href="/">
              Clock
            </a>
            <a className='navbarItem2'  href="/Radio">
              Radio
            </a>
            <a className='navbarItem3'  href="/Play">
              ?
            </a>
        </nav>
      </>
    )
  }
}

export default NavBar
