import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Image from "./india.jpg";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  document.title = !(props.category === "general")
    ? "NewsXPess-" +
      props.category.charAt(0).toUpperCase() +
      props.category.slice(1)
    : "NewsXPress";

  useEffect(() => {
    updateNews();
  }, [page]);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsed_data = await data.json();
    setArticles(parsed_data.articles);
    setTotalResults(parsed_data.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const handlePrevious = async () => {
     setPage(page - 1);
  };

  const handleNext = async () => {
    setPage(page + 1);
  };

  return (
    <div className="container my-3">
      <div style={{ margin: "40px 0" }}>
        <h1 style={{ textAlign: "center" ,marginTop: "85px" }}>
          {!(props.category === "general")
            ? "Top News (" +
              props.category.charAt(0).toUpperCase() +
              props.category.slice(1) +
              ")"
            : "Top News"}
        </h1>
      </div>

      {loading && <Spinner />}
      <div className="row my-3">
        {!loading &&
          articles.map((element) => {
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
          disabled={page <= 1 ? true : false}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handlePrevious();
          }}
        >
          Previous &larr;
        </button>
        <button
          type="button"
          disabled={
            page + 1 > Math.ceil(totalResults / props.pageSize) ? true : false
          }
          className="btn btn-primary"
          onClick={() => {
            handleNext();
          }}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
