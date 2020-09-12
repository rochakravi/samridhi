import React from "react";
import "./collection-item.styles.scss";
import { FaHeart } from "react-icons/fa";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {" "}
        <FaHeart color="red" size="20px">
          {" "}
        </FaHeart>{" "}
        <button> Add to Cart</button>
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>

        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
