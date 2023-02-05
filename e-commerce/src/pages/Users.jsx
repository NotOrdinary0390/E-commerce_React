import React from 'react';
import axios from 'axios';
import { Nav } from "react-bootstrap";
import SelectCategory from '../components/SelectCategory';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CarouselUser from '../components/CarouselUser';
import { ArrowUpCircleFill } from 'react-bootstrap-icons';


export default function Users() {

  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('-');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/category")
      .then(response => setCategory(response.data))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/products?categoryId=' + selectedCategory)
      .then(response => setProducts(response.data))
  }, [selectedCategory])

  const selectCategory = (event) => {
    //console.log(event.target.value);
    setSelectedCategory(event.target.value)
  }

  return (
    <>
        <CarouselUser />
        <SelectCategory category={category} selectCategory={selectCategory} />      
        <ProductCard products={products}/> 
        
      <Nav.Link href="#top">
        <ArrowUpCircleFill className='linkUp' />
      </Nav.Link>
    </>
  )
}
