import React from 'react';
import {Card,Button} from 'react-bootstrap';

function Cart_Page({cart,removeFromCart}){
    return(
        <div className="container">
              <h1 style={{textAlign:"center"}}>CART</h1>
            <div className="row">
              {cart.map((product,index)=>{
                   return(
                    <div key={index}>
                    <Card style={{ width: '18rem',margin:"10px" }}>
                    <Card.Img variant="top" width="100px" height="300px" src={product.image} />
                    <Card.Body  style={{textAlign:"center"}}>
                            <Card.Title><u>{product.name}</u></Card.Title>
                            <Card.Text><h6>₹{product.cost}</h6></Card.Text>
                        <Button onClick={()=>removeFromCart(product)} variant="primary">Remove from Cart</Button>
                    </Card.Body>
                    </Card>
                    </div>
                           )
              })}
              

            </div>
            
        </div>
    )
}

export default Cart_Page;