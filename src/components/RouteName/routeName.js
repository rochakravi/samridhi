import React, { useState } from "react";
import SHOP_DATA from "../../shopping-data";
import CollectionPreview from "../collection-preview/collection-preview";

const RouteName = (props) => {
  const routeParam = props.match.params.routeName;

  console.log(routeParam);
  const [collection, setCollection] = useState(SHOP_DATA);
  const newCollection = collection.filter(
    (item) => item.routeName === routeParam
  );

  console.log(newCollection);
  return (
    <div>
      {newCollection.map(({ id, ...otherCollectionProrps }) => {
        return <CollectionPreview key={id} {...otherCollectionProrps} />;
      })}
    </div>
  );
};

export default RouteName;
