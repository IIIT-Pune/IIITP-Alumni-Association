import React from 'react';
import Home from './pages/Home';
import FeaturedAlumni from './pages/FeaturedAlumni/FeaturedAlumni';
import Directory from './pages/Directory';
import LocateOnMap from './pages/LocateOnMap/LocateOnMap';
import Events from './pages/Events';
import News from './pages/News';
import Career from './pages/Career';
import PhotoGallery from './pages/Gallery';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/directory">
            <Directory />
          </Route>
          <Route path="/locate">
            <LocateOnMap />
          </Route>
          <Route path="/featuredAlumni">
            <FeaturedAlumni />
          </Route>
          <Route path="/findbatchmate">
            <FeaturedAlumni />
          </Route>
          <Route path="/postjob">
            <FeaturedAlumni />
          </Route>
          <Route path="/alumnifund">
            <FeaturedAlumni />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/gallery">
            <PhotoGallery />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/career">
            <Career />
          </Route>
          <Route path="/contactus">
            
          </Route>
        </div>
      </Router>
  );
}

export default App;
