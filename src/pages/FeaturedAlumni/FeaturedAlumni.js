import React from 'react';
import Card from './Card'

export default function FeaturedAlumni() {

  return (
    <div> 
    <div style={{textAlign: "center", backgroundColor:"rgb(40,40,40)", padding:40, color: "white"}}>
      <h1>
        Our Featured Alumni
      </h1>
    </div>
    <div style= {{display:"flex", margin: 100, justifyContent: "center", flexFlow: "row wrap"}}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
  );
}