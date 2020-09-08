import React, { useState } from "react";
import "./home.styles.scss";
import Directory from "../directory/directory";

const Home = (a) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Home;
