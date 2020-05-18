import React, { Component } from 'react';
import '../pages/Home.css';
import {Modal, Carousel, Card} from "react-bootstrap";
import Daphne1 from '../assets/DaphneInLivingRoom.png';
import Yoda2 from '../assets/yodatruck-2.png';
import Daphne3 from '../assets/nathanDaphneByDaphne.png';
class Yoda extends React.Component {
    render(){
      
      
      
      return (



  <Card>
      <Card.Body>
      Hello! This is Yoda, My Dad!
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Yoda at 5 months</h3>
      <p>Just got done playing fetch and eating.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Yoda2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Yoda 8 months</h3>
      <p>Waiting on us to get done in the RV.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Long day of running outside</h3>
      <p> First time having a fire in the fireplace, Daphne enjoyed it!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Card.Body>
 
  </Card>


                
    

      ); 
    }
  }
  
  
  export default Yoda;