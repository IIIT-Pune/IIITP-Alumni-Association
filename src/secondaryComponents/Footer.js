import React from 'react';

const footstyle = {
  textAlign : 'center',
  padding:30,
  color: 'white',
  backgroundColor: 'rgb(40,40,100)'
};

export default class Footer extends React.Component {
  
  render(){
      return (
        <div style={footstyle}>
                <div class="column" id="footer_bottom_college">                
                    <span> Copyright © 2020 - All Rights Reserved - IIIT Pune</span>
                </div>
        </div>
      );
  }
}
