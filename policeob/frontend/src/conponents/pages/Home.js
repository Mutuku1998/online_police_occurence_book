import React from "react";
import { Container , Row ,Col } from 'reactstrap'
import Slidersection from "../UI/Slidersection";
import Report from "../UI/Report";

export const Home = () => {
  return (
    <section className='p-0 hero-slider-section'>
      <Slidersection/>
      <div className='hero-form'>
        <Container>
          <Row className='form-row'>
           <Col lg = '4' md ='4'>
            <div className='report-left'>
              <h2>Report Criminal offences here! </h2>
            </div>
            </Col> 
           <Col lg ='8' md='8'sm='12'>

            <Report/>
            </Col> 
          </Row>
        </Container>
      </div>
    <div className="container">
     
    </div>
      </section> 
      
  );
};
export default Home