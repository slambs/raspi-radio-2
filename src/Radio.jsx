import React, { Component } from "react"
import { Howl } from "howler"

const STATIONS =  [
        { name: "Galaxy 92 FM", src: "http://galaxy.live24.gr:80/galaxy9292" },
        { name: "Radio Neptune", src: "http://icecast.infini.fr:8000/neptune" },
        { name: "Kids Radio", src: "https://stream.radiojar.com/64p6ktzntg0uv" },
        { name: "Swing FM", src: "http://swingfm.ice.infomaniak.ch/swingfm-128.mp3"},
        { name: "Jazz & Funk",src: "https://vip2.fastcast4u.com/proxy/sjtbhd?mp=/1"},
        { name: "Skai.gr",src: "https://skai.live24.gr/skai1003"},
        { name: "Alpha 98.9",src: "https://stream.radiojar.com/xcdg6yggzfeuv"},
        { name: "A100FM",src: "http://bestgreek.info:8104/1?1645384937128"},
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
      <div className="radioStations">
        {/* <p>List of Radio Stations</p> */}
        <ul className='list-group radioStyle'>
          {STATIONS.map((radioStations, i) =>{ 
          console.log(i)
          const className = 'list-group-item radioButtonStyle list-group-item-secondary'
          return(
            <li id={radioStations.name} 
                key={i}
                className={className} 
                onClick={this.handleRadio.bind(this, radioStations)}>
              {radioStations.name}
            </li>
          )})}
        </ul>
      </div>
    )
  }
  
  handleRadio(stationClicked) {
    console.log("Handle Radio Clicked")
    console.log(1,this)
    console.log(2,stationClicked)

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
