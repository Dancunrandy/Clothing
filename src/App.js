import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor(){
        super();
        
        this.state = {
          currentUser: null
        }
    
    }
      unsubscribeFromAuth = null;
      
      componentDidMount(){
       this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
          this.setState({currentUser:user})
        })
      }
      
      componentWillUnmount(){
        this.unsubscribeFromAuth();
      }
      
      render() {
        return (
          <div>
            <Router>
              <Header currentUser = {this.state.currentUser} />
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


export default App;
