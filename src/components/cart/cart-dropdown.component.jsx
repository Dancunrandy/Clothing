import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from '../custom-button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => < CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>

);

// use  of reselect from cart selectors will allow us to memoize and not re-render a component if the state value does not change

const mapStateToProps = state => ({   
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps) (CartDropdown);