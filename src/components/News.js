// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";


// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 9,
//     category: "general",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   constructor() {
//     super();
//     this.state = {
//       data: null,
//       loading: false,
//       page: 1,
//     };
//   }


//   componentDidMount() {
//     this.setState({ loading: true });
//     const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}
//     &apiKey=8feb806080484cccb724b62ba97069df&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`

//     // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&
//     //   apiKey=8feb806080484cccb724b62ba97069df&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     fetch(url).then((res) => {
//       res.json().then((result) => {
//         console.log(result.articles);
//         this.setState({
//           data: result.articles,
//           totalResults: result.totalResults,
//           loading: false,
//         });
//       });
//     });
//   }

//   handleNext = async () => {
//     console.log("next");
//     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
      
//     }else{
//       const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}
//     &apiKey=8feb806080484cccb724b62ba97069df&category=${this.props.category}&page=${this.state.page}
//     &pageSize=${this.props.pageSize}`
//       this.setState({loading : true})
//       fetch(url).then((res) => {
//         res.json().then((result) => {
//           console.log(result.articles);
//           this.setState({ data: result.articles, loading: false });
//         });
//       });
//       this.setState({
//         page: this.state.page + 1,
//       });
//     }
//   };

//   handlePrev = async () => {
//     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=8feb806080484cccb724b62ba97069df&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({loading : true})
//     fetch(url).then((res) => {
//       res.json().then((result) => {
//         console.log(result.articles);
//         this.setState({ data:result.articles, loading: false});
//       });
//     });
//     this.setState({
//       page: this.state.page - 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <div className="container my-3">
//           <h1 style={{ margin: "56px" }} className="text-center">
//             NEWSMAN - Top Headlines
//           </h1>
//           {this.state.loading && <Spinner />}
//           <div className="row">
//             {!this.state.loading && this.state.data
//               ? this.state.data.map((element) => (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={element.title?.slice(0, 90)}
//                       description={element.description?.slice(0, 100)}
//                       imageURL={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                     />
//                   </div>
//                 ))
//               : null}
//           </div>
//         </div>

//         <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-outline-warning"
//             onClick={this.handlePrev}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / this.props.pageSize)
//             }
//             type="button"
//             className="btn btn-outline-warning"
//             onClick={this.handleNext}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </>
//     );
//   }
// }

// export default News;


import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {

     static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general",
      };
      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
      };

  constructor() {
    super();
    this.state = {
      data: null,
      loading: false,
      page: 1,
    };
  }

  async updateNews(){

    this.setState({loading:true})

    // country=${this.props.country}&category=${this.props.category}
    // &&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=8feb806080484cccb724b62ba97069df
       &pageSize=${ this.props.pageSize }&category=${this.props.category}&page=${this.state.page}`
    //working url let url =
    //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df
    //    &pageSize=${ this.props.pageSize }`
        
    fetch(url).then((res) => {
      res.json().then((result) => {
        console.log(result.articles);
        this.setState({
          data: result.articles,
          totalResults: result.totalResults,
          loading: false,
        });
      });
    });

  }

  componentDidMount() {
    this.updateNews();
    //this.setState({loading:true})

    // country=${this.props.country}&category=${this.props.category}
    // &&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=8feb806080484cccb724b62ba97069df
    //    &pageSize=${ this.props.pageSize }&category=${this.props.category}&page=${this.state.page}`
    //working url let url =
    //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df
    //    &pageSize=${ this.props.pageSize }`
        
    // fetch(url).then((res) => {
    //   res.json().then((result) => {
    //     console.log(result.articles);
    //     this.setState({
    //       data: result.articles,
    //       totalResults: result.totalResults,
    //       loading: false,
    //     });
    //   });
    // });
  }

  handleNext = async () => {
    this.updateNews();
    this.setState({page : this.state.page+1})
    // console.log("next");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
      
    // }else{
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df&page=${
    //     this.state.page + 1
    //   }&pageSize=${ this.props.pageSize}`;
    //   this.setState({loading : true})
    //   fetch(url).then((res) => {
    //     res.json().then((result) => {
    //       console.log(result.articles);
    //       this.setState({ data: result.articles, loading: false });
    //     });
    //   });
    //   this.setState({
    //     page: this.state.page + 1,
    //   });
    // }
  };

  handlePrev = async () => {
    this.updateNews();
    this.setState({page : this.state.page-1})
    // let url = ` https://newsapi.org/v2/top-headlines?country=in&apiKey=8feb806080484cccb724b62ba97069df&page=${
    //   this.state.page - 1
    // }&pageSize=${ this.props.pageSize}`;
    // this.setState({loading : true})
    // fetch(url).then((res) => {
    //   res.json().then((result) => {
    //     console.log(result.articles);
    //     this.setState({ data: result.articles, loading: false});
    //   });
    // });
    // this.setState({
    //   page: this.state.page - 1,
    // });
  };


    render() {
          return (
            <>
              <div className="container my-3">
                <h1 style={{ margin: "56px" }} className="text-center">
                  NEWSMAN - Top Headlines
                </h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                  {!this.state.loading && this.state.data
                    ? this.state.data.map((element) => (
                        <div className="col-md-4" key={element.url}>
                          <NewsItem
                            title={element.title?.slice(0, 90)}
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
      
              <div className="container d-flex justify-content-between">
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
              </div>
            </>
          );
        }
}

export default News;