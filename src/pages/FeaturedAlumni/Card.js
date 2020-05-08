import React from 'react';
import ProfileUi from 'react-profile-card';


export default function Card() {
  return (
        <div style={{margin:50}}>
          <ProfileUi imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' name='vineet jk' designation='designer'/>
        </div>
  );
}