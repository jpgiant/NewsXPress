import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, time, imgURL, newsURL} = this.props;
    const dateFormatter = (dt) => {
      // console.log(DateTime)
      let d = new Date(dt);
      // return(`${d.getHours()<10?'0'+d.getHours():d.getHours()}:${d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes()}:${d.getSeconds()<10?'0'+d.getSeconds():d.getSeconds()} on ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`)
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
  }
}

export default NewsItem;
