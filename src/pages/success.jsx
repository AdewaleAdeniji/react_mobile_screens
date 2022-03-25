import React from "react";

const Success = (props) => {
  return (
    <div className="app-success">
      <img src="/success.svg" className="success-img" />
      <div className="text-description text-white">
        Your funding of $70,000 has been received. It will reflect in your
        wallet balance once processing is completed.
      </div>
      <button className="btn bg-white">Go back</button>
    </div>
  );
};
export default Success;