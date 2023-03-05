import React from "react";

const NewsItem = (props) => {
  let { title, time, imgURL, newsURL } =props;
  const dateFormatter = (dt) => {
    let d = new Date(dt);
    return d.toUTCString();
  };
  return (
    <div>
      <div className="card my-3">
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body" style={{ height: "280px" }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text my-3">
            <small className="text-muted">
              Published on {dateFormatter(time)}
            </small>
          </p>
          <a
            href={newsURL}
            className="btn btn-sm btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Expand News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
