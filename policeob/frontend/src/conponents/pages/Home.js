import React from "react";
import { Container , Row ,Col } from 'reactstrap'
import Slidersection from "../UI/Slidersection";
export const Home = () => {
  return (
    <section className='p-0 hero-slider-section'>
      <Slidersection/>
      <div className='hero-form'>
        <Container>
          <Row className='form-row'>
           <Col lg = '4' md ='4'>
            <div className='find-riders-left'>
              <h2>Report Criminal offences here! </h2>
            </div>
            </Col> 
           <Col lg ='8' md='8'sm='12'></Col> 
          </Row>
        </Container>
      </div>
      </section> 
  );
};
export default Home