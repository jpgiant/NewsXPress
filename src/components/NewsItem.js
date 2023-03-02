import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsURL } = this.props;
    const stringCompressor = (str) => {
      var txt = str;
      txt = txt.substring(0, 70);
      txt = txt.substring(0, txt.lastIndexOf(" ")) + "...";
      return txt;
    };
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={imgURL} className="card-img-top" alt="..." />
          <div className="card-body" style={{ height: "280px"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{stringCompressor(description)}</p>
            <a
              href={newsURL}
              className="btn btn-sm btn-primary"
              target={"_blank"}
            >
              Expand News
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
