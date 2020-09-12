import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./header.styles.scss";

const Header = ({ title, items }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <Link className="option" to="/sigin">
          SIGN IN
        </Link>
        <Link className="option" to="/sigup">
          SIGN UP
        </Link>
        <Link className="option" to="/cart">
          {" "}
          <FaShoppingCart />
        </Link>
        <Link className="option" to="/wishlist">
          <FaHeart color="red" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
