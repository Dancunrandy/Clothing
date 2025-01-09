
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div >
      <Router>
      <Switch>
        <Route exact path='/' component={ Homepage}/>
        <Route  path='/Shop' component={ ShopPage}/>
      </Switch>
        
      </Router>

    </div>
  );
}

export default App;
