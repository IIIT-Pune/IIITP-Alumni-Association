import React from 'react';
import Card from './Card'
import Header from '../../secondaryComponents/Header'
import NavbarPage from '../../secondaryComponents/NavBar'
import SideNav from '../../secondaryComponents/SideNav'
import Slider from '../../secondaryComponents/Slider'
import Signup from '../../secondaryComponents/Signup'
import CardContainer from '../../secondaryComponents/CardContainer'
import MapContainer from '../../secondaryComponents/MapContainer'
import Footer from '../../secondaryComponents/Footer'
import Socialhandle from '../../primaryComponents/Socialhandle';


export default function FeaturedAlumni() {

  return (
    <div> 
          < Header/>
      < NavbarPage/>
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
    <Footer />
  </div>
  );
}