import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { BoxArrowInRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


export default function Signin() {

  const [error, setError] = useState('');

  const navigate = useNavigate();
  const loginUser = (obj) => {
    //console.log(obj);
    axios.post('http://localhost:3000/login', obj)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('userLogin', JSON.stringify(response.data));
        if (response.data.user.admin == true) {
          navigate('/admin');
        } else {
          navigate('/users');
        }
      })
      .catch(error => setError(error.response.user.data));
  }

  return (
    <>
      <Container style={{ width: "600px" }}>
        <div className='titleDiv'>
          <BoxArrowInRight className="display-4" />
          <h2 className="display-3">Login</h2>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            loginUser(values)
          }}
        >

          <Form>
            <Field
              name="email"
              type="email"
              className="form-control mb-3"
              placeholder="Email..."
            //onChange={handleEmailChange}
            />
            <Field
              name="password"
              type="password"
              className="form-control mb-3"
              placeholder="Password..."
            //onChange={handlePasswordChange}
            />

            <button type="submit" className="hover form-control mb-3 btn btn-dark">
              Login
            </button>
          </Form>

        </Formik>
      </Container>
    </>
  )
}
