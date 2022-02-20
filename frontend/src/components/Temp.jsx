/** @format */

import React, { PureComponent } from 'react'

const CELCIUS_CONST = <span>&#8451;</span>

export class TempInside extends PureComponent {
  render() {
    return (
      <div className='tempStyle'>
        <h5>
          Inside: {this.getInsideTemp()} {CELCIUS_CONST}
        </h5>
        <h5> (Location) : {this.getOutsideTemp()} {CELCIUS_CONST} </h5>
      </div>
    )
  }
  getInsideTemp() {
    // const sensor = require('node-dht-sensor')
    // sensor.read(22, 4, function (err, temperature, humidity) {
    //   if (!err) {
    //     return `temp: ${temperature.toFixed(2)}°C, humidity: ${humidity.toFixed(
    //       2
    //     )}%`
    //   } else {
    //     return '-99'
    //   // }
    return '-99'
    //})
  }
  getOutsideTemp(){
    return '-99'
  }
}

export default TempInside
