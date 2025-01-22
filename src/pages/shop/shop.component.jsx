import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverviewComponent />} />
        <Route path="/:collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
