import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { FetchedData } from '../pages/Home';
import Button from 'react-bootstrap/Button';
import { incNumber, editNumber } from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

const ItemDiv = styled.div`
display: flex;
justify-content: space-around;
margin-top: 20px;
.caroImg{
  width: 24rem;
}
@media (max-width: 1000px) {
  .caroImg{
    width: 20rem;
  }
}
.rightItem{
  padding: 0 30px;
}
@media (max-width: 700px) {
  flex-direction: column;
  .leftItem{
    display: none;
  }
  .centerItem{
    display :flex;
    justify-content: center;
  }
  .caroImg{
    width: 19rem;
    margin-bottom: 10px;
  }
}
`
const Container = styled.div`
height: 30px;
background-color: snow;
border-radius: inherit;
color: #212529;
padding-left: 30px;
display: flex;
align-items: center;
font-size: 14px;
font-weigt: 500;
`
const Heading = styled.h1`
font-size: 30px;
font-weight: 400;
`
const Smallimg = styled.img`
width: 6rem;
cursor: pointer;
&: hover {
  outline: 2px solid grey;
  transition: 1s all;
}
`
const PoseDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 5px;
margin: 0 30px;
`
const BtnDiv = styled.div`
display: flex;
align-items: center;
gap: 30px;
Button{
  margin-right: 30px;
}
`
const ItemId = styled.p`

`

const ItemDetail = () => {

  const { id } = useParams();
  const { items, loading, setCartUpdate, cartUpdate } = useContext(FetchedData);
  const [showGallery, setGallery] = useState(true);
  const [newImg, setNewImg] = useState('');
  const [itemNum, setItemNum] = useState(1);
  const [itemSize, setItemSize] = useState("");
  const [findData, setFindData] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.changeTheNumber);

  useEffect(() => {
    console.log(count);
  }, [])

  const addToCartFunc=(pushData)=>{
    setFindData((count.map((itemfind)=>itemfind.itemId===pushData.itemId)? true: false));
    console.log(findData);
    if(findData===true){
      setCartUpdate(!cartUpdate);
      const replaceIndex = count.indexOf(count.find((itemfind)=>itemfind.itemId===pushData.itemId));
      dispatch(editNumber({pushData, replaceIndex}));
    } else if(findData===false){
      setCartUpdate(!cartUpdate);
      dispatch(incNumber(pushData));
    }
  }

  return (
    <div>
      {loading ? <>
        {
          items.map((item, i) => (id === item.id_product) && (
            <div key={new Date().getTime().toString() + i}>
              <Container>
                <b>Home </b> | {item.name}
              </Container>
              <ItemDiv>
                <section className="leftItem">
                  <PoseDiv>
                    {
                      item.gallery.map((smallItem, i) => (
                        <div key={i}>
                          <Smallimg
                            onMouseOver={() => {
                              setGallery(false)
                              setNewImg(smallItem.image)
                            }}
                            src={smallItem.image} alt="" />
                        </div>
                      ))
                    }
                  </PoseDiv>
                </section>
                <section className="centerItem">
                <Carousel className="caroImg" variant="dark">
                      {
                        item.gallery.map((smallItem, i) => (
                          <Carousel.Item key={i}>
                            <img className="d-block w-100" key={i} src={showGallery ? smallItem.image : newImg} alt="productImg" />
                            </Carousel.Item>
                        ))
                      }
                    </Carousel>
                </section>
                <section className="rightItem">
                  <Heading>{item.name}</Heading>
                  <ItemId><b>SKU: </b>{item.sku}</ItemId>
                  <p style={{ margin: "0" }}>
                    <span style={{ color: "#c5c5c5", textDecoration: "line-through" }}>Rs. {item.price}</span>
                    <span style={{ fontSize: "22px" }}><b> Rs. {item.selling_price}</b></span>
                    <span style={{ color: "red" }}> ({item.discount}%)</span></p>
                  <p><small>MRP (inclusive of all taxes)</small></p>
                  <span>SELECT SIZE</span>
                  <div>
                    {
                      Array.from(item.size.split(",").join("").split("[").join(" ").split("]")).map((itemvals, i) => (itemvals !== "") && (
                        <Button variant="light" key={i} onClick={(event) => setItemSize(event.target.innerText)}>{itemvals}</Button>))
                    }</div>
                  <p style={{ color: "red" }}>SIZE GUIDE</p>
                  <BtnDiv>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item"><button style={{ margin: 0 }} className="page-link"
                          onClick={() => { if (itemNum > 0) setItemNum(itemNum - 1) }}>-</button></li>
                        <li className="page-item"><div className="page-link">{itemNum}</div></li>
                        <li className="page-item"><button className="page-link"
                          onClick={() => setItemNum(itemNum + 1)}>+</button></li>
                      </ul>
                    </nav>
                    <div>
                      <Button variant="secondary" onClick={()=>addToCartFunc({ image: item.image, price: item.price, itemcount: itemNum, itemId: item.id_product, discount: item.discount, sellPrice: item.selling_price, desc: item.name, itemSize: itemSize })}>ADD TO CART</Button>
                      <Button variant="secondary">BUY NOW</Button>
                    </div>
                  </BtnDiv>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label"><small>CHECK DELIVERY IN YOUR AREA</small></label>
                    <input type="tel" className="form-control" style={{ width: "200px" }} placeholder="Enter Pincode" />
                  </div>
                  <div>
                    <p><b>KNOW YOUR WEAR</b></p>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td><small>Color</small><br />{item.color}</td>
                          <td><small>Febric Content</small><br />{item.fabric_family}</td>
                        </tr>
                        <tr>
                          <td><small>Febric Detail</small><br />{item.fabric_family}</td>
                          <td><small>Neck Type</small><br />{item.neck}</td>
                        </tr>
                        <tr>
                          <td><small>Sleeve</small><br />{item.sleeve}</td>
                          <td><small>Sleeve Type</small><br />{item.fit}</td>
                        </tr>
                        <tr>
                          <td colSpan="2">Show More</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p><b>STYLING SUGGESTION</b></p>
                    <p>Style the kurta with pants and wedges to complete the look.</p>
                  </div>
                </section>
              </ItemDiv>
            </div>
          ))}
      </> : ""}
    </div>
  )
}

export default ItemDetail
