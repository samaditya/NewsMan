import React from "react";

const NewsItem = (props)=>{  
    let {title , description, imageURL , newsUrl, author , date} = props;
    
    return (
      <>
        <div className="container my-3">
        
        <div className="card" style={{backgroundColor:"#2B3035",color:"white"}}> 
        <img src={!imageURL?"https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg":imageURL}
        className="card-img-top" alt=" "/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
            {description}
        </p>
        <p className="card-text"><small>By {!author?"Anonymous":author} on {new Date(date).toGMTString()}</small></p>
        <a href= {newsUrl}  className="btn btn-custom stretched-link" style={{fontFamily:"fantasy",backgroundColor:"#702BF6",color:"white"}}>Source</a>
            
          </div>
        </div>
         </div> 
      </>
      
    );
  }

export default NewsItem;
