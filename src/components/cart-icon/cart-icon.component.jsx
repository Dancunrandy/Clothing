import React from "react";

import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {ReactComponent as ShoppingIcon} from './../../assets/11.2 shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})
//  reduce() function accumulates quantity on cart icon, in other words a Selector.
const mapStateToProps = createStructuredSelector({          //updated code from cart selectors js file
    itemCount:selectCartItemsCount
})

export default connect( mapStateToProps,mapDispatchToProps) (CartIcon);