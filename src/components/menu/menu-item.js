import React from "react";
import "./menu-item.styles.scss";
import { Link } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size, routeName }) => {
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Link to={`${routeName}`}>
        {" "}
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>{" "}
      </Link>
    </div>
  );
};

export default MenuItem;
