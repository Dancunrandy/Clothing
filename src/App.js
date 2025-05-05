import React from 'react';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp.component';

import { auth } from './firebase/firebase.utils'; // Import Firebase auth
import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();

        // ✅ Set up Firebase auth listener
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            // Optionally dispatch user info here if needed
            console.log("User changed:", user);
        });
    }

    componentWillUnmount() {
        // ✅ Unsubscribe from auth listener if it exists
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth();
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/shop/*" element={<ShopPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route
                            path="/Signin"
                            element={
                                this.props.currentUser ? (
                                    <Navigate to="/" />
                                ) : (
                                    <SignInAndSignUpPage />
                                )
                            }
                        />
                    </Routes>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
