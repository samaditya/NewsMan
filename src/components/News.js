import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: false,
      page: 1,
    };
  }

  componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df&pageSize=18";
    fetch(url).then((res) => {
      res.json().then((result) => {
        console.log(result.articles);
        this.setState({
          data: result.articles,
          totalResults: result.totalResults,
        });
      });
    });
  }



  handleNext = async () => {
    console.log("next")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df&page=${
        this.state.page + 1
      }&pageSize=18`;
      fetch(url).then((res) => {
        res.json().then((result) => {
          console.log(result.articles);
          this.setState({ data: result.articles });
        });
      });
      this.setState({
        page: this.state.page + 1,
      });
    }
  };




  handlePrev = async () => {
    let url = ` https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df&page=${
      this.state.page - 1
    }&pageSize=18`;
    fetch(url).then((res) => {
      res.json().then((result) => {
        console.log(result.articles);
        this.setState({ data: result.articles });
      });
    });
    this.setState({
      page: this.state.page - 1,
    });
  };

 
 
 
 
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NEWSMAN - Top Headlines</h2>
          <div className="row">
            {this.state.data
              ? this.state.data.map((element) => (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title?.slice(0, 45)}
                      description={element.description?.slice(0, 88)}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button type="button" className="btn btn-light" onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
