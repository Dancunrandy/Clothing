import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp.component';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/Signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
