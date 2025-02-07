import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; // using useSelector hook from react-redux

import CollectionItem from '../../components/collection-item/collection.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = () => {
  const { collectionId } = useParams();  // Getting the collectionId from the URL params
  const collection = useSelector(state => selectCollection(collectionId)(state));  // Fetching collection from Redux

  if (!collection) {
    return <h2>Collection not found</h2>; // Handle invalid collectionId
  }

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
