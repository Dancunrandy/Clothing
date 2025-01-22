import React from "react";

import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";

 const ShopPage = ({match}) => {
 return (
         <div className="shop-page">
             <Route exact path={`${match.path}`} Component={CollectionsOverviewComponent}/>
             <Route path={`${match.path}/:collectionId`} Component={CollectionPage}/>
         </div>
       );
 }



export default ShopPage;

