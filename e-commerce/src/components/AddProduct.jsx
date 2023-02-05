import React from 'react';
import { Formik, Form, Field } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct({ addP }) {


    return (
        <>
            <h2 className='mt-5 componentsTitles'>Add product on e-commerce</h2>
            <Formik
                initialValues={{
                    name: "",
                    price: "",
                    categoryId: "",
                    rate: "",
                    description: "",
                    qta: "",
                    imageUrl: ""

                }}

                onSubmit={
                    (value, { resetForm }) => {
                        addP(value)
                        resetForm({})
                    }}
            >
                <Form className="my-3">
                    <Field
                        name="name"
                        className="form-control mb-3"
                        placeholder="name..."
                    />
                    <Field
                        name="price"
                        className="form-control mb-3"
                        placeholder="price..."
                    />
                    <Field
                        name="categoryId"
                        className="form-control mb-3"
                        placeholder="category id..."
                    />
                    <Field
                        name="description"
                        className="form-control mb-3"
                        placeholder="description..."
                    />
                    <Field
                        name="qta"
                        className="form-control mb-3"
                        placeholder="qta..."
                    />
                    <Field
                        name="imageUrl"
                        className="form-control mb-3"
                        placeholder="URL image..."
                    />

                    <button type="submit" className="form-control mb-3 btn btn-dark">
                        Submit
                    </button>
                </Form>
            </Formik>
        </>
    )
}
