import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
    totalResults:0,

  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
  }

  async updateNews() {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=8feb806080484cccb724b62ba97069df
       &pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page}`;
    //working url let url =
    //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df
    //    &pageSize=${ this.props.pageSize }`

    fetch(url).then((res) => {
      res.json().then((result) => {
        console.log(result.articles.length);
        console.log(result.articles)
        this.setState({
          articles: result.articles,
          totalResults: result.totalResults,
          loading: true,
        });
      });
    });
  }

  componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
  
      this.setState({page:this.state.page+1});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=8feb806080484cccb724b62ba97069df
       &pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page}`;
    
    fetch(url).then((res) => {
      res.json().then((result) => {
        //console.log(result.articles);
        console.log(result.articles.length);
        this.setState({
          articles: this.state.articles.concat(result.articles),
          totalResults: result.totalResults,
          loading: true,
          lengthh:result.articles.length,
        });
      });
    });   
  };

  render() {
    return (
      <>
       
          <h1 style={{ margin: "56px" }} className="text-center">
            NEWSMAN - Top Headlines
          </h1>
         {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.lengthh !== this.state.totalResults}
            loader={<Spinner/>}
            > 
          <div className="container">
          <div className="row">
            {this.state.articles
              ? this.state.articles.map((element) => (
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
        

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-outline-warning"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-outline-warning"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div> */}
      
      </>
    );
  }
}

export default News;
