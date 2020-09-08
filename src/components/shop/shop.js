import React from "react";
import SHOP_DATA from "../../shopping-data";
import CollectionPreview from "../collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProrps }) => {
          return <CollectionPreview key={id} {...otherCollectionProrps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
