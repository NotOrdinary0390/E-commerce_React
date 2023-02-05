import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

export default function ProductCard({products}) {
  return (
    <>
    {products.map(p =>
        <Card className='card my-5 mx-auto' key={p} style={{ width: "400px" }}>
          <Card.Header className='cardTitle' as="h5">
            <div>{p.name}</div>
            
          </Card.Header>
          <Card.Body>
            <Card.Text className='text-center'>
              <img
                src={p.imageUrl}
                width="360"
                height="250"
                className="d-inline-block align-top" />
            </Card.Text>
            <div className='text-center'>
              {p.description}
            </div>
            <div className="textC" >
            <div>
              <StarFill /><StarFill /><StarFill />{p.rate}
            </div>
            <div>{p.price},00 €</div>
            </div>
            <Button variant="success">Buy</Button>
          </Card.Body>
        </Card>
      )}
    </>
  )
}
