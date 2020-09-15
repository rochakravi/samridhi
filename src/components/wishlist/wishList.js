import React from "react";
import { connect } from "react-redux";
import CollectionItem from "./../collection-item/collection-item";

const WishList = ({ wishListItems, deleteItemFromWishList }) => {
  const handleDelete = (index) => {
    alert("delete" + index);
    deleteItemFromWishList(index);
  };

  return (
    <div>
      <ul>
        {wishListItems.map((item, index) => {
          return (
            <div>
              <CollectionItem
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
              ></CollectionItem>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                {" "}
                Remove Item from WishList
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishListItems: state.selection.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItemFromWishList: (index) =>
      dispatch({ type: "REMOVE_ITEM_FROM_WISHLIST", payload: index }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WishList);
