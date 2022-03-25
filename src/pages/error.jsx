import React from "react";

const ErrorScreen = (props) => {
  return (
    <div className="app-success errored">
      <img src="/error.svg" className="success-img" />
      <div className="text-description text-white">
        Payment Failed
      </div>
      <button className="btn bg-blue">Go back</button>
    </div>
  );
};
export default ErrorScreen;