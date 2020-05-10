import React from 'react';
import './CardBundle.css'

const parentcontainer = {
  height: 550,
  borderRadius: 10,
  margin:40,
  
};

export default class CardBundle extends React.Component {
  render(){
      return (
        <div class="card pcc" style={parentcontainer}>
        <article class="card-body">
          <h4 class="card-title mb-4 mt-1 head" >{this.props.title}<a class="clink" title={this.props.ltitle} href={this.props.link}>&rarr;</a></h4>

          <div class="container">
            <Card heading={this.props.c1heading} content={this.props.c1content}/>
            <Card heading={this.props.c2heading} content={this.props.c2content}/>
            <Card heading={this.props.c3heading} content={this.props.c3content}/>
            <Card heading={this.props.c4heading} content={this.props.c4content}/>
          </div>
        </article>
        </div>
      );
  }
}



function Card(props) {
  return (
    <div class="card pop-card" style={{height: 350}}>
            <h3 class="title">{props.heading}</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="crd-content">
              <p class="crd-text">{props.content}</p>
            </div>	
            </div>
  );
}











