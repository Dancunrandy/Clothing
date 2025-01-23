import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import './collection.styles.scss';
import CollectionItem from "../../components/collection-item/collection.component";
import { useParams } from "react-router-dom";

const CollectionPage = ({ collection }) => {
  const { collectionId } = useParams(); // Get the collectionId from the URL

  const { items, title } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Modify mapStateToProps to work with the useParams hook
const mapStateToProps = (state) => {
  return (ownProps) => {
    const { collectionId } = useParams(); // Use useParams to get the collectionId
    return {
      collection: selectCollection(collectionId)(state),
    };
  };
};

export default connect(mapStateToProps)(CollectionPage);
