import React, { useState } from "react";
import "./collection-item.styles.scss";
import { FaHeart } from "react-icons/fa";
import Button from "../../ui-kit/button/button";
import { connect } from "react-redux";

const CollectionItem = ({
  id,
  name,
  price,
  imageUrl,
  addItemToCart,
  addItemToWishList,
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
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="wishlist">
          {" "}
          <FaHeart color="red" size="20px" onClick={handleWishList}>
            {" "}
          </FaHeart>{" "}
        </div>
        <div>
          <Button title="Add TO Cart" onclick={handleClick}></Button>
        </div>
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>

        <span className="price">{price}</span>
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

export default connect(null, mapDispatchToProps)(CollectionItem);
