import React from "react";
 
import {connect} from 'react-redux';
 
import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/4.3 crown.svg'
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";
import './header.styles.scss'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart/cart-dropdown.component";
 
 const Header = ({currentUser, hidden}) =>(
    <div className="header">
      <Link  className="logo-container" to="/" >
         <Logo className="logo"/>
      </Link>
      <div className="options">
         <Link className="option" to='/Shop' >
            SHOP
         </Link>
         <Link className="option" to='/Shop' >
            CONTACT
         </Link>
         {
            currentUser ?
            <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
            :
            <Link className="option" to='/signIn'> SIGN IN</Link>
         }
         <CartIcon/>
      </div>
         {
            hidden ? null :  <CartDropdown/>

         }
    </div>
 )
 
//  Memoization 
 const mapStateToProps = createStructuredSelector ({
      currentUser:selectCurrentUser,
      hidden:selectCartHidden
 })
 
 export default connect(mapStateToProps) (Header);