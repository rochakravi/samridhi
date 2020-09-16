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
}) => {
  const [item, setItem] = useState({
    name,
    price,
    imageUrl,
  });

  const handleClick = () => {
    addItemToCart(item);
  };
  const handleWishList = () => {
    addItemToWishList(item);
  };

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
      <div>
        <button title="Add TO Cart" onclick={handleClick}>
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => {
      dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
    },
    addItemToWishList: (item) => {
      dispatch({
        type: "ADD_ITEM_TO_WISHLIST",
        payload: item,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ListView);
