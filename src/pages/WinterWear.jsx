import React, { useContext, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeItems from '../components/HomeItems';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Filters from '../components/Filters';
import { FetchedData } from './Home';

const ContainerDiv = styled.div`
display: flex;
justify-content: center;
padding-top: 10px;
` 
const NewestFilter = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 20px;
border: 1px solid lightgrey;
border-radius: 5px;
`

const WinterWear = () => {

  const {items, loading, pages, setPages} = useContext(FetchedData);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname==='/winterwear'){
      setPages({...pages, start: 3, end: 25, keyType: "winter-wear"});
    }
  }, []);


  return (
    <ContainerDiv>
      <section className="leftSection">
       <Filters /></section>
      <section className="rightSection">
        {loading ? <Container>
          <NewestFilter>
            <div>
              {items.length} items
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  Newest
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" onMouseEnter={()=>setPages({...pages, sortby: "price", sortdir: "asc"})}>Price (Low to High)</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onMouseEnter={()=>setPages({...pages, sortby: "price", sortdir: "desc"})}>Price (High to Low)</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onMouseEnter={()=>setPages({...pages, sortby: "discount", sortdir: "asc"})} >Discount</Dropdown.Item>
                  <Dropdown.Item href="#/action-4" onMouseEnter={()=>setPages({...pages, sortby: "is_new", sortdir: "asc"})}>Newest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </NewestFilter>
          {(loading === false) && <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>}
          <Row>
            {
              items.map((item, i) => (
                <Col key={i}><HomeItems cardId={`${item.id_product}`} size={'14rem'} images={item.image} title={item.name.slice(0, 20)} price={`Rs.${item.price}`} 
                newLaunch={<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                Top
                <span className="visually-hidden">unread messages</span>
              </span>} /></Col>
              ))
            }
          </Row>
        </Container> : ""}
      </section>
    </ContainerDiv>
  )
}

export default WinterWear