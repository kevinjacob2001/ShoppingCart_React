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
  {
    name:"Casio G-Shock ",
    cost:"6,635",
    image:"https://m.media-amazon.com/images/I/61VCbsEHhmL._AC_UL320_.jpg"
  },
  {
    name:"OnePlus Nord 5G",
    cost:"27,999",
    image:"https://images-eu.ssl-images-amazon.com/images/I/41unZp1B15L._AC_US160_FMwebp_QL70_.jpg"
  },
  {
    name:"Adidas Superstar",
    cost:"10,300",
    image:"https://sneakerhouse.pl/images/classics/6000-7000/Adidas-Superstar-J-C77154_%5B6103%5D_1200.jpg"
  },
  {
    name:"Puma Men's Regular Fit",
    cost:"1709.00",
    image:"https://images-na.ssl-images-amazon.com/images/I/81FXwyT6-iL._UX569_.jpg"
  },
])

const addToCart=(product)=>{
  setCart([...cart,{...product}])
  console.log(cart)
}

const removeFromCart=(productToRemove)=>{
  setCart(cart.filter(product=>product!==productToRemove))
}

  return (
    <Router>
            <Header cart={cart}/>
        <Switch>
          <Route path="/cart">
            <Cart_Page cart={cart} removeFromCart={removeFromCart}/>
          </Route>
          <Route  path="/">
            <Product_page products={products} addToCart={addToCart}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;