import React, { useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle, Gear, Trash3 } from 'react-bootstrap-icons';
import { Button, Table, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function TableAdmin({ product, removeProduct }) {

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const currentProducts = product.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handlePrevClick = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    const navigate = useNavigate();
    const selectProduct = (p) => {
        alert("prodotto id selezionato: " + p.id)
        localStorage.setItem('selectedProduct', JSON.stringify( p ));
        navigate('/update/');
        //console.log(p.id, p.name)
    };

    return (
        <>
            <h2 className='mt-5 componentsTitles'>Products List</h2>
            <div className='mt-3 tablePage'>
                <Button variant="outline-dark" onClick={handlePrevClick}>
                    <ArrowLeftCircle className='mx-1' />Prev
                </Button>
                {product.length > currentPage * itemsPerPage + itemsPerPage && (
                    <Button variant="outline-dark" onClick={handleNextClick}>
                        <ArrowRightCircle /> Next
                    </Button>
                )}
            </div>
            <Table striped bordered hover variant="dark" className='my-1 fixTableHead'>
                <thead>
                    <tr className='th'>
                        <th>#</th>
                        <th>name</th>
                        <th>price</th>
                        <th>qta</th>
                        <td></td>
                    </tr>
                    <tr>

                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map(ele => (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.price} €</td>
                            <td>{ele.qta}</td>
                            <td className='btnTd'>
                                <Button variant="outline-warning"
                                    className='mx-2'
                                    id='update-button'
                                    onClick={() => selectProduct(ele)}>
                                    <Gear size={16} />
                                </Button>
                                <Button variant="outline-danger"
                                    className='mx-2'
                                    onClick={() => removeProduct(ele)}>
                                    <Trash3 size={16} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
