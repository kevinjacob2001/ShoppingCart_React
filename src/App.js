import Header from './Components/Header/Header'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Cart_Page from './Pages/Cart_Page/Cart_Page'
import Product_page from './Pages/Product_page/Product_Page';

import './App.css';

export default function App() {
  return (
    <Router>
            <Header/>
        <Switch>
          <Route path="/cart">
            <Cart_Page/>
          </Route>
          <Route path="/products">
            <Product_page />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}