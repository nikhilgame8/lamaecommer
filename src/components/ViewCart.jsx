import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { decNumber, incCurrent, decCurrent } from '../actions/action';
import Table from 'react-bootstrap/Table';
import HomeItems from './HomeItems';
import OrderPlaced from './OrderPlaced';

const ItemDiv = styled.div`
display: flex;
justify-content: center;
gap: 10px;
& p{
  margin: 0;
}
`
const Container = styled.div`
height: 30px;
background-color: #bf1616;
color: white;
border-radius: inherit;
padding-left: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weigt: 500;
p{
    margin: 0;
}
a{
    color: white;
    font-weight: 500;
}
@media (max-width: 700px) {
    p{
        font-size: 10px;
    }
}
`
const HeadingDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 30px;
padding: 20px 0;
`
const CartContainer = styled.div`
display: flex;
justify-content: space-around;
gap: 10px;
.leftCartSection{
    width :70%;
}
.rightCartSection{
    width: 30%;
    height: 100%;
}
.page-link{
    background: grey;
    color: white;
    height: 35px;
}
@media (max-width: 700px) {
    flex-direction: column;
    .leftCartSection{
        width: 100%;
      }
      .rightCartSection{
        width: 100%;
      }
  }
`
const TotalDetail = styled.div`
padding: 20px;
background: #faf9f6;
div{
    display: flex;
    justify-content: space-around;
}
@media (max-width: 700px) {
    p{
        margin: 0;
    }
`
const BtnDiv = styled.div`
margin-bottom: 20px;
`

const ViewCart = () => {

    const cartDetail = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    const [itemStatus, setItemStatus] = useState(false);
    const subTotal = cartDetail.map((item) => item.itemcount * item.price).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
    const subDiscount = cartDetail.map((item) => parseFloat(item.itemcount * parseFloat(item.price * ((item.discount !== 0) ? (item.discount / 100) : 1)))).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
    const getData=(data)=>{
        console.log(data);
        setTimeout(()=>{
            setItemStatus(!data);
        }, 3000);
    }

    return (
        <div>
            <Container>
                <p>Elevate your look with LAMA beauty <Link to='/'> Click here</Link> to avail offer.</p>
            </Container>
            <HeadingDiv>Shopping Cart</HeadingDiv>
            {
                (cartDetail.length !== 0) ? <CartContainer>
                    <section className='leftCartSection'>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Discount</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartDetail.map((item, i) => (
                                        <tr key={i}>
                                            <td>
                                                <ItemDiv>
                                                    <div>
                                                        <HomeItems size={'6rem'} cardId={`${item.itemId}`} images={item.image} />
                                                    </div>
                                                    <div>
                                                        <p style={{ color: "brown", fontWeight: "500", textTransform: "uppercase" }}>{item.desc.slice(0, 25)}...</p>
                                                        <p><span>SIZE: {item.itemSize}</span></p>
                                                        <button style={{ color: "brown", background: "transparent", border: "none" }}
                                                            onClick={() => {
                                                                setItemStatus(!itemStatus);
                                                                dispatch(decNumber(i))
                                                            }} ><u>Remove</u></button>
                                                    </div>
                                                    <div>
                                                    </div>
                                                </ItemDiv>
                                            </td>
                                            <td>
                                                <p style={{ margin: "0" }}><span style={{ color: "#c5c5c5", textDecoration: "line-through" }}>Rs. {item.price}</span></p>
                                            </td>
                                            <td>
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item"><button onClick={() => {
                                                            setItemStatus(!itemStatus);
                                                            dispatch(decCurrent(i))
                                                        }} style={{ margin: 0 }} className="page-link">-</button></li>
                                                        <li className="page-item"><div className="page-link">{item.itemcount}</div></li>
                                                        <li className="page-item"><button onClick={() => {
                                                            setItemStatus(!itemStatus);
                                                            dispatch(incCurrent(i))
                                                        }} className="page-link">+</button></li>
                                                    </ul>
                                                </nav>
                                            </td>
                                            <td><p style={{ margin: "0" }}>
                                                <span> Rs. {item.sellPrice}</span>
                                                <span style={{ fontWeight: "700" }}><small> - {item.discount}%</small></span></p></td>
                                            <td><p style={{ margin: "0" }}>
                                                <span> Rs. {item.itemcount * item.sellPrice}</span></p></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </section>
                    <section className='rightCartSection'>
                        <TotalDetail>
                            <p><b>DISCOUNT</b></p><hr />
                            <div>
                                <p>coupons</p>
                                <button type="button" className="btn btn-secondary">ADD COUPON</button>
                            </div>
                            <p><b>SUMMARY</b></p><hr />
                            <div><p>Subtotal</p><p>Rs. {subTotal}</p></div>
                            <div><p>Discount</p><p>(-) Rs. {subDiscount}</p></div><hr />
                            <div><p><b>Order Total</b></p><p>Rs. {subTotal - subDiscount}</p></div>
                            <OrderPlaced onPlaced={getData} />
                        </TotalDetail>
                    </section>
                </CartContainer> : <ItemDiv>Your Cart is Empty 😥</ItemDiv>
            }
        </div>
    )
}

export default ViewCart;