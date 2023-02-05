import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddProduct from '../components/AddProduct';
import TableAdmin from '../components/TableAdmin';
import { ArrowUpCircleFill } from 'react-bootstrap-icons';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const urlProduct = 'http://localhost:3000/products/';

export default function Admin() {

  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [userLog, setUserLog] = useState(null);
  const [selectUpdate, setUpdate] = useState(false);

  useEffect(() => {
    const userLogJson = JSON.parse(localStorage.getItem('userLogin'));
    if (userLogJson) {
    setUserLog(JSON.parse(localStorage.getItem('userLogin')));
    } else {
      navigate('/login')
    }
    //console.log(userLogJson)
    if (!userLogJson.user.admin == true) {
      navigate('/users');
    }
  }, [])
  

  useEffect(() => {
    axios.get(urlProduct, {
    }).then(response => setProduct(response.data))
  }, [selectUpdate])

  function addProduct(ele) {
    axios.post(urlProduct, ele)
      .then(response => {
        if (response.status === 201) {
          setUpdate((curentValue) => !curentValue)
          console.log(product);
        }
      })
  };

  let removeProduct = async (prod, id) => {
    alert('remove product: ' + id + prod.name + '?');
    await axios.delete(urlProduct + prod.id)
      .then(response => {
        if (response.status === 200) {
          setUpdate((curentValue) => !curentValue)
          //console.log(prod); 
        }
      });
  }

  return (

    <>
      <Nav.Link href="#top">
        <ArrowUpCircleFill className='linkUp' />
      </Nav.Link>
      <TableAdmin
        product={product}
        removeProduct={removeProduct}
      />
      <AddProduct
        addP={addProduct}
      />

    </>
  )
}
