import React from "react";
import { connect } from "react-redux";
import ListView from "./../listView/ListView";

const WishList = ({ wishListItems, deleteItemFromWishList, addItemToCart }) => {
  const handleDelete = (index) => {
    deleteItemFromWishList(index);
  };

  const movetoCart = (item, index) => {
    addItemToCart(item);
    deleteItemFromWishList(index);
  };

  return (
    <div>
      {wishListItems.length > 0 ? (
        <ul>
          {wishListItems.map((item, index) => {
            return (
              <div>
                <ListView
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  btnTitle="Add To Cart"
                  btnhandleClick={() => movetoCart(item, index)}
                  secondbtnTitle="Remove from WishList"
                  secondbtnhandleClick={() => {
                    handleDelete(index);
                  }}
                ></ListView>
              </div>
            );
          })}
        </ul>
      ) : (
        <h3>Add some items in Wishlist</h3>
      )}
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
    addItemToCart: (item) => {
      dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WishList);
