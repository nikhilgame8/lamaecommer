import React, { useContext, useEffect } from 'react';
import HomeItems from './HomeItems';
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import { sliderItems, footWearCollectionImg } from '../data';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';
import Slider from './Slider';
import { FetchedData } from '../pages/Home';
import { useLocation } from 'react-router-dom';

const Heading = styled.h2`
    font-family: "Avenir-Black";
    text-transform: uppercase;
    text-align: center;
    margin: 40px 0;
    font-size: 25px;
    letter-spacing: 5px;
    font-weight: 500;
    line-height: 1.2;
    box-sizing: border-box;
}
`
const ImgContainerDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ContainerDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 700px) {
  .hstack{
    flex-direction: column;
  }
}
`
const MainCol = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Col = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
width: 60%;
gap: 20px;
`
const StyleEdit = styled.div`
background: #faf9f6;
padding: 20px 0;
margin: 30px 0;
`
const FootWearBtn = styled.button`
height: 70px;
width: 300px;
background-color: #faf9f6;
opacity: 0.9;
border: none;
`
const ContainerGrid = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
`

const HomeListing = () => {

  const styleArray = ["PLUS SIZE", "FOLK SONG", "W IS MORE", "FOOTWEAR"];
  const {items, loading, pages, setPages} = useContext(FetchedData);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname==='/'){
      setPages({...pages, start: 5, end: 20, keyType: "top-wear"})
    }
  }, []);
  
  return (
    <div>
      <Slider />
      {(loading===false) && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
      <Heading>What's New</Heading>
      {loading ?
      <Carousel>
        <Carousel.Item>
          <ContainerDiv>
            <Stack direction="horizontal" gap={5}>
              {
                items.map((item, i)=> i<4 && (
                  <HomeItems cardId={`${item.id_product}`} size={'14rem'} key={new Date().getTime().toString()+i} images={item.image} title={item.name.slice(0, 20)} price={`Rs.${item.price}`} />
                ))
              }
            </Stack>
          </ContainerDiv>
        </Carousel.Item>
        <Carousel.Item>
          <ContainerDiv>
            <Stack direction="horizontal" gap={5}>
            {
                items.map((item, i)=> (i>3 && i<8) && (
                  <HomeItems cardId={`${item.id_product}`} size={'14rem'} key={new Date().getTime().toString()+i} images={item.image} title={item.name.slice(0, 20)} price={`Rs.${item.price}`} />
                ))
              }
            </Stack>
          </ContainerDiv>
        </Carousel.Item>
        <Carousel.Item>
          <ContainerDiv>
            <Stack direction="horizontal" gap={5}>
            {
                items.map((item, i)=> (i>7 && i<12) && (
                  <HomeItems cardId={`${item.id_product}`} size={'14rem'} key={new Date().getTime().toString()+i} images={item.image} title={item.name.slice(0, 20)} price={`Rs.${item.price}`} />
                ))
              }
            </Stack>
          </ContainerDiv>
        </Carousel.Item>
      </Carousel> : ""}
      <Heading>BEST SELLER</Heading>
      {loading ?
      <Carousel>
        <Carousel.Item>
          <ContainerDiv>
            <Stack direction="horizontal" gap={5}>
              {
                items.map((item, i)=> i<4 && (
                  <HomeItems cardId={`${item.id_product}`} size={'14rem'} key={new Date().getTime().toString()+i} images={item.image} title={item.name.slice(0, 20)} price={`Rs.${item.price}`} />
                ))
              }
            </Stack>
          </ContainerDiv>
        </Carousel.Item>
        <Carousel.Item>
          <ContainerDiv>
            <Stack direction="horizontal" gap={5}>
            {
                items.map((item, i)=> (i>15 && i<20) && (
                  <HomeItems cardId={`${item.id_product}`} size={'14rem'} key={new Date().getTime().toString()+i} images={item.image} title={item.name.slice(0, 20)} price={`Rs.${item.price}`} />
                ))
              }
            </Stack>
          </ContainerDiv>
        </Carousel.Item>
        <Carousel.Item>
          <ContainerDiv>
            <Stack direction="horizontal" gap={5}>
            {
                items.map((item, i)=> (i>12 && i<17) && (
                  <HomeItems cardId={`${item.id_product}`} size={'14rem'} key={new Date().getTime().toString()+i} images={item.image} title={item.name.slice(0, 20)} price={`Rs.${item.price}`} />
                ))
              }
            </Stack>
          </ContainerDiv>
        </Carousel.Item>
      </Carousel> : ""}
      {
        sliderItems.map((item, i)=> i>0 && (
          <>
          <Heading key={new Date().getTime().toString()+i}>{item.sale}</Heading>
        <ImgContainerDiv>
        <img src={item.img} className="img-fluid" alt="Responsive image" />
        </ImgContainerDiv>
          </>
        ))
      }
      <Heading>EXPLORE OUR FOOTWEAR COLLECTION</Heading>
      <MainCol>
      <Col>
        {
          footWearCollectionImg.map((item, i)=>(
            <div style={{flex: "1 1 30%"}} key={new Date().getTime().toString()+i}><img style={{width: "15rem"}} src={item.img} alt={`footwear${i}`} /></div>
          ))
        }
        <FootWearBtn>FOOT APPAREL</FootWearBtn>
    </Col>
    </MainCol>
    <StyleEdit>
    <Heading>STYLE EDIT</Heading>
    <ContainerGrid>
              {
                items.map((item, i)=> i<4 && (
                  <HomeItems cardId={`${item.id_product}`} size={'14rem'} key={new Date().getTime().toString()+i} images={item.image} boldTitle={<p style={{textAlign: "center"}}><b>{styleArray[i]}</b></p>} lineBreak={<hr/>} boldPrice={<p style={{textAlign: "center"}}><b>SHOP THE LOOK</b></p>} />
                ))
              }
          </ContainerGrid>
    </StyleEdit>
    </div>
  )
}

export default HomeListing
