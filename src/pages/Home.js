import React from 'react';
import Header from '../secondaryComponents/Header'
import NavbarPage from '../secondaryComponents/NavBar'
import SideNav from '../secondaryComponents/SideNav'
import Slider from '../secondaryComponents/Slider'
import Signup from '../secondaryComponents/Signup'
import CardContainer from '../secondaryComponents/CardContainer'
import MapContainer from '../secondaryComponents/MapContainer'
import Footer from '../secondaryComponents/Footer'
import Socialhandle from '../primaryComponents/Socialhandle';

function Home() {
  return (
    <div className="App">
      < Header/>
      < NavbarPage/>
      <div style={{marginTop: "3%", display:"flex",  justifyContent: "center", flexFlow: "row wrap"}}>
        < Slider />
        <Socialhandle/>
      </div>
      <div style={{margin:"7%"}}>
        < CardContainer/>
      </div>
      < MapContainer/>
      < Footer/>
      
    </div>
  );
}

export default Home;
