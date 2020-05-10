import React from "react";
import './Socialhandle.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
 


export default class Socialhandle extends React.Component{
  render() {
    return (
      <div class="bss" style={{margin:10}}>
        <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.flippy = r} stylez={{ width: '400px', height: '100px' }}>
          <FrontSide style={{backgroundColor: 'rgb(50,50,50)'}}>
                 <div style={{margin:10, padding:50, display:"flex", color:"rgb(150,150,150)", fontWeight:500, fontSize:20}}>
                      Welcome to Alumni Association of IIIT Pune                  
                 </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: 'white', height:500}}>
                  <center><p style={{fontWeight: 900, fontSize: 40, color: "rgb(40,40,100)"}}>Social Handle</p></center>
                  <div class="flp">
                    <div class="fl">
                      <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                      <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                      <a href="#" class="google"><i class="fa fa-google"></i></a> 
                    </div>
                    <div class="fl">
                      <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                      <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
                    </div>
                  </div>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}
