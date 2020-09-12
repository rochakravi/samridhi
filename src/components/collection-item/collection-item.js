import React from "react";
import "./collection-item.styles.scss";
import { FaHeart } from "react-icons/fa";
import Button from "../../ui-kit/button/button";

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
          <Button title="Add TO Cart" />
        </div>
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>

        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
