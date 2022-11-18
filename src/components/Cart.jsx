import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiShoppingCartLine } from 'react-icons/ri';
import HomeItems from './HomeItems';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { decNumber } from '../actions/action';
import { Link } from 'react-router-dom';
import OrderPlaced from './OrderPlaced';

const ItemDiv = styled.div`
display: flex;
justify-content: center;
gap: 10px;
& p{
  margin: 0;
}
`
const BtnDiv = styled.div`
margin-bottom: 20px;
`

const Cart = (props) => {

  const cartDesign = {
    width: "350px",
    opacity: "0.8",
    backgroundColor: "#faf9f6",
  }

  const cartData = useSelector((state) => state.changeTheNumber);
  const subTotal = cartData.map((item) => item.sellPrice).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
  const dispatch = useDispatch();
  const [itemStatus, setItemStatus] = useState(false);

  const getData=(data)=>{
    console.log(data);
    setTimeout(()=>{
        setItemStatus(!data);
    }, 3000);
}

  return (
    <Offcanvas show={props.show} style={cartDesign} onHide={() => props.handleClose(false)} placement="end" name="end" >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart <RiShoppingCartLine /></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {
          (cartData.length !== 0) ? <>
            <ItemDiv>
              <p><b>Item in Cart : </b>{cartData.length}</p>
              <p><b>Cart Subtotal : </b>{subTotal}</p>
            </ItemDiv>
            <OrderPlaced onPlaced={getData} />{
              cartData.map((item, i) => (
                <div key={i}>
                  <ItemDiv>
                    <div>
                      <HomeItems size={'6rem'} cardId={`${item.itemId}`} images={item.image} />
                    </div>
                    <div>
                      <p style={{ color: "brown", fontWeight: "500", textTransform: "uppercase" }}>{item.desc.slice(0, 35)}</p>
                      <p style={{ margin: "0" }}>
                        <span style={{ color: "#c5c5c5", textDecoration: "line-through" }}>Rs. {item.price}</span>
                        <span> Rs. {item.sellPrice}</span>
                        <span style={{ fontWeight: "700" }}><small> - {item.discount}%</small></span></p>
                      <p><span>SIZE: {item.itemSize}</span></p>
                      <p><span>QTY: {item.itemcount}</span></p>
                      <button style={{ color: "brown", background: "transparent", border: "none" }}
                        onClick={() => {
                          setItemStatus(!itemStatus);
                          dispatch(decNumber(i))
                        }} ><u>Remove</u></button>
                    </div>
                    <div>
                    </div>
                  </ItemDiv>
                  <hr />
                </div>
              ))}
            <BtnDiv className="d-grid gap-2">
              <Link to="/viewCart" className="d-grid gap-2"><button type="button" className="btn btn-secondary">VIEW AND EDIT CART</button></Link>
            </BtnDiv>
          </> : <ItemDiv>Your Cart is Empty 😥</ItemDiv>
        }
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart
