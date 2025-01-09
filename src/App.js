
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div >
      <Router>
      <Switch>
      <Header/>
        <Route exact path='/' component={ Homepage}/>
        <Route  path='/Shop' component={ ShopPage}/>
      </Switch>
        
      </Router>

    </div>
  );
}

export default App;
