import React from 'react';
import CardBundle from '../primaryComponents/CardBundle';

export default class CardContainer extends React.Component {
  render(){
    return (
      <div style={{display: "flex", justifyContent: "center", flexFlow: "row wrap"}}>
                <CardBundle
                title="Recent Events"
                link="/Events"
                ltitle="Events"
                c1heading="Event 1"
                c2heading="Event 2"
                c3heading="Event 3"
                c4heading="Event 4"
                c1content="this is a card to test please test it"
                c2content="this is a card to test please test it"
                c3content="this is a card to test please test it"
                c4content="this is a card to test please test it"
                />
                <CardBundle
                title="Top News"
                link="/News"
                ltitle="News"
                c1heading="News 1"
                c2heading="News 2"
                c3heading="News 3"
                c4heading="News 4"
                c1content="this is a card to test please test it"
                c2content="this is a card to test please test it"
                c3content="this is a card to test please test it"
                c4content="this is a card to test please test it"
                />
                <CardBundle
                title="Career"
                link="/Career"
                ltitle="Career"
                c1heading="job 1"
                c2heading="job 2"
                c3heading="job 3"
                c4heading="job 4"
                c1content="this is a card to test please test it"
                c2content="this is a card to test please test it"
                c3content="this is a card to test please test it"
                c4content="this is a card to test please test it"
                />
              </div>
    );
  }
}
