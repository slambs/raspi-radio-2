import React, { Component } from 'react'

class Clock extends Component {
  constructor() {
    super()
    this.state = { time: new Date() }
  }

  currentTime() {
    this.setState({ time: new Date() })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render() {
    return (
      <React.Fragment>
        <div className='clockStyle'>
          <h3 id='time'>{this.state.time.toLocaleTimeString()}</h3>
        </div>
      </React.Fragment>
    )
  }
}

export default Clock
