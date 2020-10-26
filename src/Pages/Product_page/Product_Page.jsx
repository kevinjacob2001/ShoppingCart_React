import React from 'react';
import {Card,Button} from 'react-bootstrap';

function Product_Page({products,addToCart}){
    return(
        <div>
            <h1 style={{textAlign:"center"}}>PRODUCTS</h1>
           <div className="container">
               <div className="row">
              {products.map((product,index)=>{
                  return(
                        <div className="col-6" key={index}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width="100px" height="300px" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.cost}</Card.Text>
                            <Button onClick={()=>addToCart(product)} variant="primary">Add to Cart</Button>
                        </Card.Body>
                        </Card>
                        </div>
                               )
            
              })}     


               </div>

           </div>
        </div>
    )
}

export default Product_Page;