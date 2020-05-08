import React from 'react';
import { Zoom } from 'react-slideshow-image';
import im1 from '../images/2.png';

const images = [
  im1,
  im1,
  im1
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    )
}
export default class Slider extends React.Component {
  
  render(){
      return (
        <div style={{width:"60%"}}>
          <Slideshow/>
        </div>  
          );
  }
}
