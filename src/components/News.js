import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a73500d68dc641abbac9277f2a0d864d&pageSize=6";
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      articles: parsed_data.articles,
      totalResults: parsed_data.totalResults,
    });
  }

  handlePrevious = async () => {
    // console.log("Button Clicked");
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a73500d68dc641abbac9277f2a0d864d&pageSize=6&&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsed_data.articles,
    });
  };

  handleNext = async () => {
    // console.log("Button Clicked");
    if (this.state.page+1 > Math.ceil(this.state.totalResults / 6)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a73500d68dc641abbac9277f2a0d864d&pageSize=6&&page=${
        this.state.page + 1
      }`;
      let data = await fetch(url);
      let parsed_data = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsed_data.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 style={{ textAlign: "center" }}>Top News</h1>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgURL={element.urlToImage}
                  newsURL={element.url}
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
