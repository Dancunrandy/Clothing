import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/button.component";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
    const navigate = useNavigate();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your Cart is Empty</span>
                )}
            </div>
            <CustomButton onClick={() => navigate("/Checkout")}>CHECKOUT</CustomButton>
        </div>
    );
};

// Use of reselect from cart selectors will allow us to memoize and not re-render a component if the state value does not change
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
