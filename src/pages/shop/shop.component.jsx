import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <Routes>
        {/* Default shop route */}
        <Route index element={<CollectionsOverview />} />
        {/* Dynamic collection route */}
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
