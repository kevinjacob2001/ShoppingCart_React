import Header from './Components/Header/Header'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Cart_Page from './Pages/Cart_Page/Cart_Page'
import Product_page from './Pages/Product_page/Product_Page';

import './App.css';
import { useState } from 'react';

function App() {
const[cart,setCart]=useState([])

const [products,setProducts]=useState([
  {
    name:"JBL 650BTNC",
    cost:"12,000",
    image:"https://images-na.ssl-images-amazon.com/images/I/81WxagvboDL._SL1500_.jpg"
  },
  {
    name:"Apple AirPods 2",
    cost:"20,000",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489688005"
  },
])

const addToCart=(product)=>{
  setCart([...cart,product])
  console.log(cart)
}



  return (
    <Router>
            <Header cart={cart}/>
        <Switch>
          <Route path="/cart">
            <Cart_Page cart={cart} />
          </Route>
          <Route  path="/">
            <Product_page products={products} addToCart={addToCart}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;