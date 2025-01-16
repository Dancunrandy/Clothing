import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

      unsubscribeFromAuth = null;
      
      componentDidMount(){
      const {setCurrentUser} = this.props
       this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => {
          if(userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snaShot => {
              setCurrentUser({
                  id: snaShot.id,
                  ...snaShot.data()
               })
            })
          }
          setCurrentUser(userAuth); 
        })
      }
      
      componentWillUnmount(){
        this.unsubscribeFromAuth();
      }
      
      render() {
        return (
          <div>
            <Router>
              <Header/>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Shop" element={<ShopPage />} />
                <Route path="/Signin" element={<SignInAndSignUpPage />} />
              </Routes>
            </Router>
          </div>
        );
      }
      
      }
      
const mapDispatchToProps = dispatch => ({
    setCurrentUser:user = dispatch(setCurrentUser(user))
})


export default connect( null,mapDispatchToProps) (App);
