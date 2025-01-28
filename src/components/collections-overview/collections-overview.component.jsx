import React from "react";

// import './collections-overview.styles.scss';

import PreviewCollection from "../preview-collection/preview.component";

import { connect } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { CollectionsOverviewContainer } from "./collections-overview.styles";


import { createStructuredSelector } from "reselect";

const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
                    {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
            }
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})


export default connect(mapStateToProps) (CollectionsOverview);