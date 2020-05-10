import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from 'react-photo-gallery';
import { WiredCard } from "wired-card";
import Header from '../secondaryComponents/Header'
import NavbarPage from '../secondaryComponents/NavBar'
import SideNav from '../secondaryComponents/SideNav'
import Slider from '../secondaryComponents/Slider'
import Signup from '../secondaryComponents/Signup'
import CardContainer from '../secondaryComponents/CardContainer'
import MapContainer from '../secondaryComponents/MapContainer'
import Footer from '../secondaryComponents/Footer'
import Socialhandle from '../primaryComponents/Socialhandle';

const photos = [
    {
      src: 'https://scx1.b-cdn.net/csz/news/800/2019/2-nature.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://scx1.b-cdn.net/csz/news/800/2019/1-biodiversity.jpg',
      width: 1,
      height: 1
    },
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/800x599",
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
        width: 4,
        height: 3
      }
  ];
  
export default function PhotoGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (

    <div>
            < Header/>
      < NavbarPage/>
      <div style={{textAlign: "center", backgroundColor:"rgb(40,40,40)", padding:40, color: "white"}}>
        <h1>
            PHOTO GALLERY
        </h1>
      </div>
      <div style= {{margin: 90}}>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <Footer />
    </div>
    );
  }
  