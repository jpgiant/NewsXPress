import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Image from "./india.jpg";
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
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a73500d68dc641abbac9277f2a0d864d&pageSize=${this.props.pageSize}`;

    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsed_data = await data.json();
    // this.setState({
    //   articles: parsed_data.articles,
    //   totalResults: parsed_data.totalResults,
    //   loading: false,
    // });
    this.updateNews() 
  }

  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a73500d68dc641abbac9277f2a0d864d&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      articles: parsed_data.articles,
      totalResults: parsed_data.totalResults,
      loading: false,
    });
  };

  handlePrevious = async () => {
    // console.log("Button Clicked");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=a73500d68dc641abbac9277f2a0d864d&pageSize=${
    //   this.props.pageSize
    // }&&page=${this.state.page - 1}`;

    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsed_data = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsed_data.articles,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews()
  };

  handleNext = async () => {
    // console.log("Button Clicked");
    // if (
    //   !this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / this.props.pageSize)
    // ) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=a73500d68dc641abbac9277f2a0d864d&pageSize=${
    //     this.props.pageSize
    //   }&&page=${this.state.page + 1}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsed_data = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsed_data.articles,
    //     loading: false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews()
  };

  render() {
    return (
      <div className="container my-3">
        <h1 style={{ textAlign: "center" }}>Top News</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    imgURL={Image}
                    newsURL={element.url}
                    time={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1 ? true : false}
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.handlePrevious();
            }}
          >
            Previous &larr;
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
                ? true
                : false
            }
            className="btn btn-primary"
            onClick={() => {
              this.handleNext();
            }}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
