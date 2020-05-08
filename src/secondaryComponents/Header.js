import React from 'react';
import Socialhandle from '../primaryComponents/Socialhandle'
import img from '../images/iiitpaa.png';
import Media from 'react-media';

export default function Header() {

  const mystyle = {
        

        paddingTop: 20,
        paddingBottom: 20,
      };

      const elem = (
        <div style={{mystyle}}>
            <div>
                <a href="#"><img src={img} width="40%" height="95%"/></a>
                <button style={{float: "right", marginTop: 8}} type="button" class="btn btn-outline-secondary">Login</button>
                <button style={{float: "right", marginTop: 8}} type="button" class="btn btn-outline-secondary">Signup</button>
            </div>
        </div>
    );

      const elem2 = (
        <div style={{mystyle}}>
            <div>
                <a href="#"><img src={img} width="80%" height="95%"/></a>
            </div>
        </div>
    );

  return (
    <Media queries={{
        small: "(max-width: 600px)",
        large: "(min-width: 600px)"
    }}>
        {matches => (
        <>
            {matches.small && elem2}
            {matches.large && elem}
        </>
        )}
    </Media>
  );
}

/*<Socialhandle/>*/