import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function Update() {

  const [selectedProduct, setSelectedProduct] = useState({});
  //const [detailProduct, setDetailProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const product = localStorage.getItem('selectedProduct');
    if (product) {
      setSelectedProduct(JSON.parse(product));
      console.log(product)
    }
  }, []);

  console.log(selectedProduct)

  // useEffect(() => {
  //   if (detailProduct && detailProduct.id) {
  //     axios.get(`http://localhost:3000/products/${detailProduct.id}`)
  //       .then(response => {
  //         setDetailProduct(response.data);
  //       });
  //   }
  // }, [detailProduct]);

  const saveProduct = (obj) => {
    axios.patch('http://localhost:3000/products/', obj, {
    })
      .then(response =>
        navigate('/admin')
      )
  }

  return (
    <>
      <h1 className="mt-5 mb-4 componentsTitles" style={{ color: 'rgb(0, 174, 255)' }}>
        Edit Product:
        <span style={{ color: 'black' }}> {selectedProduct.name}</span>
      </h1>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className='labelUpdate'>ID</Form.Label>
            <Form.Control type="number" placeholder="Enter id" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className='labelUpdate'>NAME</Form.Label>
            <Form.Control placeholder="name prod" />
          </Form.Group>


        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='labelUpdate'>DESCRIPTION</Form.Label>
          <Form.Control placeholder="description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label className='labelUpdate'>image Url</Form.Label>
          <Form.Control placeholder="image Url" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className='labelUpdate'>QTA</Form.Label>
            <Form.Control type="number" placeholder="qta" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className='labelUpdate'>categoria id</Form.Label>
            <Form.Select type="number" defaultValue="Choose...">
              <option>1</option>
              <option>2</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className='labelUpdate'>PRICE</Form.Label>
            <Form.Control type="number" placeholder="price €" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className='labelUpdate'>RATE</Form.Label>
            <Form.Control type="number" placeholder="rate" />
          </Form.Group>
        </Row>

        <Button variant="dark" type="submit" onClick={saveProduct}>
          Submit
        </Button>
      </Form>
    </>
  )
}
