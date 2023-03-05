import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
