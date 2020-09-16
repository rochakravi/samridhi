import React, { useState } from "react";
import "./listView.styles.scss";
import { FaHeart } from "react-icons/fa";
import Button from "../../ui-kit/button/button";
import { connect } from "react-redux";

const ListView = ({
  id,
  name,
  price,
  imageUrl,
  addItemToCart,
  addItemToWishList,
  btnTitle,
  secondbtnTitle,
  secondbtnhandleClick,
  btnhandleClick,
}) => {
  return (
    <div className="list-view">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div>
        <span className="name">{name}</span>
      </div>
      <div>
        <span className="price">{price}</span>
      </div>
      <div className="btn-group">
        <span className="btn">
          {" "}
          <Button title={btnTitle} onclick={btnhandleClick}></Button>
        </span>
        <span className="btn">
          <Button
            title={secondbtnTitle}
            onclick={secondbtnhandleClick}
          ></Button>
        </span>
      </div>
    </div>
  );
};

export default connect(null, null)(ListView);
