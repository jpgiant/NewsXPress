import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state=({
    progress: 0,
  });

 setProgress = (p) => {
    this.setState({ progress: p });
  };
  render() {
   
    return (
      <div> 
        <LoadingBar
          color="#0b5ed7"
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          transitionTime="100"
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={9}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={9}
                country={"in"}
                category={"business"}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={9}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={9}
                country={"in"}
                category={"health"}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={9}
                country={"in"}
                category={"science"}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={9}
                country={"in"}
                category={"sports"}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={9}
                country={"in"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
