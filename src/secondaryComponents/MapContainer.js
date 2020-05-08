import React from 'react';
import img from '../images/map2.png'

const mapstyle = {
    marginTop: "10%",
    backgroundImage: `url(${img})`,
    backgroundColor: "#cccccc", 
    height: 600,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover"
}

export default class MapContainer extends React.Component {
  render(){
      return (
        <div style={mapstyle}>
        <center><button type="button" class="btn btn-outline-secondary">Explore Map</button></center>
      </div>
      );
  }
}
