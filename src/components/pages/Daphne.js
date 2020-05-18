import React, { Component } from 'react';
import '../pages/Home.css';
import Daphne1 from '../assets/DaphneInLivingRoom.png';
import Daphne2 from '../assets/DaphneOutsideMall.png';
import Daphne3 from '../assets/nathanDaphneByDaphne.png';
import { Card, Carousel } from 'react-bootstrap';
class Daphne extends React.Component {
    render(){
      
      
      
      return (
        
<Card>
 
      <Card.Body>Hello! This is Daphne, My Mom!
      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Daphne at 5 months</h3>
      <p>Just got done playing fetch and eating.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daphne2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Daphne 8 months</h3>
      <p>Working hard as a services dog at the Mall Of America.</p>
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
  
  
  export default Daphne;