import React from "react";
 
import {connect} from 'react-redux';

import { ReactComponent as Logo} from '../../assets/4.3 crown.svg'
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart/cart-dropdown.component";
 
 const Header = ({currentUser, hidden}) =>(
    <HeaderContainer>
      <LogoContainer LogoContainer to="/" >
         <Logo className="logo"/>
      </LogoContainer>
      <OptionsContainer>
         <OptionLink to='/Shop' >
            SHOP
         </OptionLink>
         <OptionLink to='/Shop' >
            CONTACT
         </OptionLink>
         {
            currentUser ?
            <OptionLink as ='div' onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
            :
            <OptionLink to='/signIn'> SIGN IN</OptionLink>
         }
         <CartIcon/>
      </OptionsContainer>    
         {
            hidden ? null :  <CartDropdown/>

         }
    </HeaderContainer>
 )
 
//  Memoization 
 const mapStateToProps = createStructuredSelector ({
      currentUser:selectCurrentUser,
      hidden:selectCartHidden
 })
 
 export default connect(mapStateToProps) (Header);