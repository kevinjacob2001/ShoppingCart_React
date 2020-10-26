import React from 'react';
import {Card,Button} from 'react-bootstrap';

function Product_Page(){
    return(
        <div>
            <h1 style={{textAlign:"center"}}>PRODUCTS</h1>
           <div className="container">
               <div className="row">
                   
               <div className="col-12 col-md-6">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="100px" height="300px" src="https://images-na.ssl-images-amazon.com/images/I/81WxagvboDL._SL1500_.jpg" />
                <Card.Body>
                    <Card.Title>JBL 650BT</Card.Title>
                    <Card.Text>
                    MRP: 12,000
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
                </Card>
              </div>
              <div  className="col-12 col-md-6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="100px" height="300px" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489688005" />
                <Card.Body>
                    <Card.Title>AirPods</Card.Title>
                    <Card.Text>
                    MRP: 20,000
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
                </Card>
                </div>

               </div>

           </div>
        </div>
    )
}

export default Product_Page;