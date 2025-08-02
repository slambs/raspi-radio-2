import React, { Component } from "react"
import { Howl } from "howler"
import Clock from './Clock'

const STATIONS =  [
        { name: "Galaxy 92 FM", src: "http://galaxy.live24.gr:80/galaxy9292" },
        { name: "Velvet 96.8", src: "https://metromedia.live24.gr/velvet968thess?ver=60799" },
        { name: "Classic Trito", src: "https://radiostreaming.ert.gr/ert-trito" },
        { name: "Radio Neptune", src: "http://icecast.infini.fr:8000/neptune" },
        { name: "Kids Radio", src: "https://stream.radiojar.com/64p6ktzntg0uv" },
        { name: "Swing FM", src: "http://swingfm.ice.infomaniak.ch/swingfm-128.mp3"},
        { name: "Jazz & Funk",src: "https://vip2.fastcast4u.com/proxy/sjtbhd?mp=/1"},
        { name: "Skai.gr",src: "https://skai.live24.gr/skai1003"},
        { name: "Alpha 98.9",src: "https://stream.radiojar.com/xcdg6yggzfeuv"},
        { name: "A100FM",src: "http://bestgreek.info:8104/1?1645384937128"},
        { name: "Art FM 90.6",src: "https://stream.webmonster.gr/artfm906"},
        { name: "Transistor 100.3",src: "http://netradio.live24.gr/tranzistor1003thess"},
        ]


export class Radio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sound: new Howl({ src: ['fake.mp3']}),
      }
    }
  
  render() {
    return (
      <div className="radioComponent">
        <ul className='d-flex radioStyle'>
          {STATIONS.map((radioStations, i) =>{ 
          const className = 'd-flex list-group-item  list-group-item-secondary'
          return(
            <li id={radioStations.name} 
                key={i}
                className={className} 
                onClick={this.handleRadio.bind(this, radioStations)}>
              {radioStations.name}
            </li>
          )})}
        </ul>
        <div className='smallClock'><Clock/></div>
      </div>
    )
  }
  
  handleRadio(stationClicked) {

    this.state.sound.stop()
    this.state.sound = new Howl({
      src: [stationClicked.src],
      html5: true,
    })

    this.state.sound.play()
  }

  setToActive (){

  }

}

export default Radio
