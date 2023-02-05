import React from 'react';
import { Alert, Container } from "react-bootstrap";
import { PersonFillAdd } from 'react-bootstrap-icons';
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const saveUser = (obj) => {
    axios.post('http://localhost:3000/register', obj).then(response => {
        console.log(response.statusText);
        console.log(response.data);
        navigate("/login");
    });
  }

  return (
    <>
      <Container style={{ width: "600px" }}>
      <div className='titleDiv'>
        <PersonFillAdd className="display-5" />
        <h2 className="display-3">Register</h2>
        </div>
        <Formik
          initialValues={{
            admin: "false",
            firstName: "",
            lastName: "",
            city: "",
            age: 18,
            email: "",
            password: "",
          }}
          
          onSubmit={(values) => {
            saveUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>      
              <Field
                name="firstName"
                className="form-control mb-3"
                placeholder="Firstname..."
              />
              {errors.firstName && touched.firstName ? (
                <Alert variant={"danger"}> {errors.firstName} </Alert>
              ) : null}
              <Field
                name="lastName"
                className="form-control mb-3"
                placeholder="Lastname..."
              />
              <Field
                name="city"
                className="form-control mb-3"
                placeholder="City..."
              />
              <Field
                name="age"
                type="numnber"
                className="form-control mb-3"
                placeholder="Age..."
              />
              <Field
                name="email"
                type="email"
                className="form-control mb-3"
                placeholder="Email..."
              />
              <Field
                name="password"
                type="password"
                className="form-control mb-3"
                placeholder="Password..."
              />
              <button type="submit" className="form-control mb-3 btn btn-dark">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Container>
      </>
  );
}
