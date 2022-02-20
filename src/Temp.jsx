import React, { PureComponent } from "react"

const CELCIUS_CONST = <span>&#8451;</span>

export class TempInside extends PureComponent {
  render() {
    return (
      <div className='tempStyle'>
        <h5>
          {" "}
          Inside (Sensor) : {this.getInsideTemp()} {CELCIUS_CONST}
        </h5>
        <h5> Outside (Location) : 24 {CELCIUS_CONST} </h5>
      </div>
    )
  }
  getInsideTemp() {
    return "23"
  }
}

export default TempInside
