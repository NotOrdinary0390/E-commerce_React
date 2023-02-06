import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function Update() {

  const [selectedProduct, setSelectedProduct] = useState({});
  const [formData, setFormData] = useState({
    id: selectedProduct.id,
    name: selectedProduct.name,
    price: selectedProduct.price,
    description: selectedProduct.description,
    imageUrl: selectedProduct.imageUrl,
    categoriaId: selectedProduct.categoriaId,
    qta: selectedProduct.qta,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const product = localStorage.getItem('selectedProduct');
    if (product) {
      setSelectedProduct(JSON.parse(product));
      //console.log(product)
    }
  }, []);
  //console.log(selectedProduct)

  // useEffect(() => {
  //   if (detailProduct && detailProduct.id) {
  //     axios.get(`http://localhost:3000/products/${detailProduct.id}`)
  //       .then(response => {
  //         setDetailProduct(response.data);
  //       });
  //   }
  // }, [detailProduct]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveProduct = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/products/${selectedProduct.id}`, formData, {
      })
      .then((response) => {
        navigate("/admin");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1 className="mt-5 mb-4 componentsTitles" style={{ color: 'rgb(0, 174, 255)' }}>
        Edit Product:
        <span style={{ color: 'black' }}> {selectedProduct.name}</span>
      </h1>

      <Form>
        <div className='d-flex justify-content-between'>
          <img style={{ maxHeight: '300px', maxWidth: '340px' }} src={selectedProduct.imageUrl} ></img>
          <Row className="mb-3 w-50">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className='labelUpdate'>ID</Form.Label>
              <Form.Control
                type="number"
                name='id'
                placeholder={selectedProduct.id}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className='labelUpdate'>NAME</Form.Label>
              <Form.Control
                type="text"
                name='name'
                placeholder={selectedProduct.name}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className='labelUpdate'>PRICE</Form.Label>
              <Form.Control
                type="number"
                name='price'
                placeholder={selectedProduct.price + '.00 €'}
                onChange={handleChange} />
            </Form.Group>
          </Row>

        </div>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='labelUpdate'>DESCRIPTION</Form.Label>
          <Form.Control
            type="text"
            name='description'
            placeholder={selectedProduct.description}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label className='labelUpdate'>image Url</Form.Label>
          <Form.Control
            type="text"
            name='imageUrl'
            placeholder={selectedProduct.imageUrl}
            onChange={handleChange} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className='labelUpdate'>categoria id</Form.Label>
            <Form.Select type="number" name='categoriaId' defaultValue={selectedProduct.categoriaId}>
            <option value="-1">select category</option>
              <option value="1">Teconology</option>
              <option value="2">Music</option>
              <option value="3">Luxury watches</option>
              <option value="4">Jewelery</option>
              <option value="5">Sport</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className='labelUpdate'>QTA</Form.Label>
            <Form.Control
              type="number"
              name='qta'
              placeholder={selectedProduct.qta}
              onChange={handleChange} />
          </Form.Group>
        </Row>

        <Button variant="dark" type="submit" onClick={saveProduct}>
          Submit
        </Button>
      </Form>
    </>
  )
}
