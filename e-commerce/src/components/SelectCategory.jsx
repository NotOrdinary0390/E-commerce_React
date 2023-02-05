import React from 'react';
import Form from 'react-bootstrap/Form';


export default function SelectCategory({category, selectCategory}) {
  return (
    <>
     <Form.Select className='my-5' aria-label="Default select example"
      onChange={selectCategory}
      style={{ width: "300px" }}>
      <option value={''}>Filter Category</option>
      {category.map(c => <option key={c} value={c.id}>{c.nameCategory}</option>)}
    </Form.Select>
    </>
  )
}
