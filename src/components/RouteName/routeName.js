import React, { useState } from "react";
import SHOP_DATA from "../../shopping-data";
import CollectionPreview from "../collection-preview/collection-preview";
import Button from "./../../ui-kit/button/button";
import "./routeName.styles.scss";
import { Link } from "react-router-dom";

const RouteName = (props) => {
  const routeParam = props.match.params.routeName;

  console.log(routeParam);
  const [collection, setCollection] = useState(SHOP_DATA);
  const newCollection = collection.filter(
    (item) => item.routeName === routeParam
  );

  console.log(newCollection);
  return (
    <>
      <div className="btn-group">
        <Link to="/">
          <Button
            className="btn"
            title="Back"
            onclick={() => {
              return null;
            }}
          ></Button>
        </Link>
        <Link to="/cart">
          <Button
            className="btn"
            title="Cart"
            onclick={() => {
              return null;
            }}
          ></Button>
        </Link>
      </div>

      <div>
        {newCollection.map(({ id, ...otherCollectionProrps }) => {
          return <CollectionPreview key={id} {...otherCollectionProrps} />;
        })}
      </div>
    </>
  );
};

export default RouteName;
