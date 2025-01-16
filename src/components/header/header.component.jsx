 import React from "react";
 
 import {connect} from 'react-redux';
 
 import {Link} from 'react-router-dom';
 import { ReactComponent as Logo} from '../../assets/4.3 crown.svg'
 
 import { auth } from "../../firebase/firebase.utils";
 import './header.styles.scss'
 
 const Header = ({currentUser}) =>(
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
      </div>
    </div>
 )
 
 const mapStateToProps = state => ({
      currentUser:state.user.currentUser
 })
 
 export default connect(mapStateToProps) (Header);