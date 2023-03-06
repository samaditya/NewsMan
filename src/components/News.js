import React, { useEffect,useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const updateNews =()=>{
    props.setProgress(10);
    setloading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}
       &pageSize=${props.pageSize}&category=${props.category}&page=${page}`;
    //working url let url =
    //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df
    //    &pageSize=${ props.pageSize }`

    fetch(url).then((res) => {
      res.json().then((result) => {
        console.log(result.articles.length);
        console.log(result.articles)
        props.setProgress(40);
        setarticles(result.articles)
        settotalResults(result.totalResults)
        setloading(true)
      });
    });
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews(); 
  },[])
  

  const fetchMoreData = async () => {
  
      
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}
       &pageSize=${props.pageSize}&category=${props.category}&page=${page+1}`;
       setpage(page+1);
    
    fetch(url).then((res) => {
      res.json().then((result) => {
        //console.log(result.articles);
        console.log(result.articles);
        setarticles(articles.concat(result.articles))
        settotalResults(result.totalResults)
        setloading(true)

      });
    });   
  };

    return (
      <>
      <div style={{backgroundColor:"#212529"}}>
          <h1 style={{ margin: "30px",color:"#ffffff",paddingTop:"40px",paddingBottom:"20px",fontFamily:"fantasy" }} className="text-center" >
            Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
          </h1>
         
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
            > 
          <div className="container" style={{backgroundColor:"#212529"}}>
          <div className="row" style={{backgroundColor:"#212529"}}>
            {articles
              ? articles.map((element) => (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title?.slice(0, 1000)}
                      description={element.description?.slice(0, 100)}
                      imageURL={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                ))
              : null}
          </div>
          </div>
          </InfiniteScroll>
          </div>

      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
  totalResults:0,

};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
