import React, { useContext, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';
import HomeItems from '../components/HomeItems';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Filters from '../components/Filters';
import { FetchedData } from './Home';
import { useLocation } from 'react-router-dom';

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

const NewLaunches = () => {

  const {items, loading, pages, setPages} = useContext(FetchedData);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname==='/newLaunches'){
      setPages({...pages, start: 1, end: 40, keyType: 'top-wear-kurtas'})
    }
  }, []);

  return (
    <ContainerDiv>
      <section className='leftSection'>
        <Filters />
          </section>
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
                  <Dropdown.Item href="#/action-1">Price (Low to High)</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Price (High to Low)</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Discount</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Newest</Dropdown.Item>
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
                newLaunch={<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                New
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

export default NewLaunches
