import React from "react";

const Loader = () => (
  <div className="relative w-12 h-12 border-4 border-primary border-solid rounded-full animate-spin mx-auto">
    <div className="absolute top-0 left-0 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
  </div>
);

export default Loader;
