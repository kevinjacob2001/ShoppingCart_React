import React from 'react';
import {Card,Button} from 'react-bootstrap';

function Cart_Page({cart}){
    return(
        <div className="container">
            <div className="row">
              {cart.map((product,index)=>{
                   return(
                    <div key={index}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" width="100px" height="300px" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.cost}</Card.Text>
                        <Button  variant="primary">Remove from Cart</Button>
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