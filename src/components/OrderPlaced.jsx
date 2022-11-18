import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeAll } from '../actions/action';

const BtnDiv = styled.div`
margin-bottom: 20px;
`

const OrderPlaced = (props) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        props.onPlaced(show);
        dispatch(removeAll());
        setShow(true);
    }

    return (
        <>
            <BtnDiv className="d-grid gap-2">
                <button type="button" className="btn btn-secondary" onClick={handleShow}>CHECK OUT</button>
            </BtnDiv>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Placed</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo 🥳, you're order is placed!</Modal.Body>
            </Modal>
        </>
    );
}

export default OrderPlaced;