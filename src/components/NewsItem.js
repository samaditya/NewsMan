import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title , description, imageURL , newsUrl, author , date} = this.props;
    
    return (
      <>
        <div className="container my-5 ">
        
        <div className="card"> 
        <img src={!imageURL?"https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg":imageURL}
        className="card-img-top" alt=" "/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
            {description}
        </p>
        <p className="card-text"><small>By {!author?"Anonymous":author} on {new Date(date).toGMTString()}</small></p>
        <a href= {newsUrl}  className="btn btn-primary stretched-link">Source</a>
            
          </div>
        </div>
         </div> 
      </>
      
    );
  }
}

export default NewsItem;
