import React from 'react';
import img from '../images/wmap.png'
import 'w3-css/w3.css';
import 'w3-css/3/w3.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapstyle = {
    marginTop: "10%",
    backgroundImage: `url(${img})`,
    backgroundColor: "#cccccc", 
    height: 600,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover",
    position:"relative",
}

const overlay = {
    width:"100%",
    height:"100%",
    backgroundColor:"rgba(0,0,0,0.59)",
    position:"absolute",

}

const text={
  
  color:"grey",
  marginTop:"0%",
}

export default class MapContainer extends React.Component {
  render(){
      return (
        <div style={mapstyle}>
          <div style={overlay}>
            <center><button type="button" class="btn btn-outline-secondary">Explore Map</button></center>
            <div class="container w3-display-middle display-4" style={text}>
              <div class="row">
                <div class="col-sm-4">Pune<br />999</div>
                <div class="col-sm-4">Pune<br />999</div>
                <div class="col-sm-4">Pune<br />999</div>


              </div>
            </div>
          </div>
        </div>
      );
  }
}
