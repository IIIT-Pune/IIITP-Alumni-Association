

import im1 from '../../images/2.png';

import React from 'react';
import ProfileUi from 'react-profile-card';


export default function Card() {
  return (
        <div style={{margin:50}}>
          <ProfileUi imgUrl="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" name='NAME' designation='Designation'/>
        </div>
  );
}