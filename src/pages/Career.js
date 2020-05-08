import React from 'react';
import CardBundle from '../primaryComponents/CardBundle';

export default class CardContainer extends React.Component {
  render(){
    return (
      <div>
        <div style={{textAlign: "center", backgroundColor:"rgb(40,40,40)", padding:40, color: "white"}}>
        <h1>
            Career
        </h1>
      </div>
        <div style={{display: "flex", justifyContent: "center", flexFlow: "row wrap"}}>
          <div >
                <CardBundle
                title="Full-time Jobs"
                c1heading="Event 1"
                c2heading="Event 2"
                c3heading="Event 3"
                c4heading="Event 4"
                c1content="this is a card to test please test it"
                c2content="this is a card to test please test it"
                c3content="this is a card to test please test it"
                c4content="this is a card to test please test it"
                />
          </div>
          <div style={{marginLeft:50}}>
                <CardBundle
                title="Internships"
                c1heading="News 1"
                c2heading="News 2"
                c3heading="News 3"
                c4heading="News 4"
                c1content="this is a card to test please test it"
                c2content="this is a card to test please test it"
                c3content="this is a card to test please test it"
                c4content="this is a card to test please test it"
                />
            </div>
          </div>
        </div>
    );
  }
}
