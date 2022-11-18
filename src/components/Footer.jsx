import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram, BsLinkedin, BsGithub, BsGem, BsFillTelephoneFill, BsPrinterFill } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';
import { SlEnvolope } from 'react-icons/sl';

const MDBCol = styled.div`
width: 33.3333%;
padding: 0 10px;
@media (max-width: 700px) {
  width: 100%;
}
`
const MDBContainer = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 700px) {
  flex-direction: column;
}
`
const CenterSection = styled.div`
display: flex;
justify-content: center;
`
const PriceDiv = styled.div`
display: flex;
justify-content: space-around;
`

const Footer = () => {
  return (
    <div bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='https://github.com/nikhilgame8' className='me-4 text-reset'><BsGithub /></a>
          <a href='https://www.linkedin.com/in/nikhil-gupta-a497a5173' className='me-4 text-reset'><BsLinkedin /></a>
          <a href='https://github.com/nikhilgame8' className='me-4 text-reset'><BsGoogle /></a>
          <a href='https://github.com/nikhilgame8' className='me-4 text-reset'><BsFacebook /></a>
          <a href='https://www.linkedin.com/in/nikhil-gupta-a497a5173' className='me-4 text-reset'><BsTwitter /></a>
          <a href='https://www.linkedin.com/in/nikhil-gupta-a497a5173' className='me-4 text-reset'><BsInstagram /></a>
        </div>
      </section>

      <CenterSection>
        <MDBContainer className='text-center text-md-start mt-5'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'><BsGem /> LAMA STORE</h6>
              <p>
                LAMA Store is best branded design and premium fashion store. You can buy products online with greate offers.
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <PriceDiv>
            <div>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p><a href='#!' className='text-reset'>React</a></p>
              <p><a href='#!' className='text-reset'>Node Js</a></p>
              <p><a href='#!' className='text-reset'>MangoDB</a></p>
              <p><a href='#!' className='text-reset'>Javascript</a></p>
            </div>

            <div>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p><a href='#!' className='text-reset'>Pricing</a></p>
              <p><a href='#!' className='text-reset'>Settings</a></p>
              <p><a href='#!' className='text-reset'>Orders</a></p>
              <p><a href='#!' className='text-reset'>Help</a></p>
            </div>
            </PriceDiv>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p><AiTwotoneHome /> Utter Pradesh, Lucknow-226003, India</p>
              <p><SlEnvolope /> nikhilking135@gmail.com</p>
              <p><BsFillTelephoneFill /> +91 6389473447</p>
              <p><BsPrinterFill /> +91 6389473448</p>
            </MDBCol>
        </MDBContainer>
      </CenterSection>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          LAMAStore.com
        </a>
      </div>
    </div>
  )
}

export default Footer
