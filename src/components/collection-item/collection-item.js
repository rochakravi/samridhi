import React, { useState } from "react";
import "./collection-item.styles.scss";
import { FaHeart } from "react-icons/fa";
import Button from "../../ui-kit/button/button";
import { connect } from "react-redux";

const CollectionItem = ({ id, name, price, imageUrl, addItemToCart }) => {
  const [item, setItem] = useState({
    name,
    price,
    imageUrl,
  });

  const handleClick = () => {
    console.log(item);
    addItemToCart(item);
  };
  // const handleWishList = (item) => {
  //   addItemToWishList(item);
  // };
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
          <FaHeart color="red" size="20px">
            {" "}
          </FaHeart>{" "}
        </div>
        <div>
          <Button title="Add TO Cart" onclick={handleClick}></Button>
          {/* <button onClick={handleClick}>Add to Cart</button> */}
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
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
