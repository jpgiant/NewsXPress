import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_APP_API;
  const [prog, setProg] = useState(0);

  const setProgress = (p) => {
    setProg(p);
  };

  return (
    <div>
      <LoadingBar color="#0b5ed7" progress={prog} transitionTime="100" />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={9}
              country={"in"}
              category={"general"}
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              pageSize={9}
              country={"in"}
              category={"business"}
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={9}
              country={"in"}
              category={"entertainment"}
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              pageSize={9}
              country={"in"}
              category={"health"}
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              pageSize={9}
              country={"in"}
              category={"science"}
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={9}
              country={"in"}
              category={"sports"}
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={9}
              country={"in"}
              category={"technology"}
              apiKey={apiKey}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
