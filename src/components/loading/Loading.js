import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loader">
      <div className="circle white"></div>
      <div className="circle red"></div>
      <div className="circle orange"></div>
      <div className="circle yellow"></div>
    </div>
  );
};
export default Loading;
