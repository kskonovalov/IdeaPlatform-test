import React from "react";

import LogoImage from "/assets/logo.svg";

const Logo = () => {
  return (
    <>
      <a href="/" className="flex items-center justify-center mb-xl">
        <img src={LogoImage} alt="Logo" className="w-32" />
      </a>
    </>
  );
};

export default Logo;
