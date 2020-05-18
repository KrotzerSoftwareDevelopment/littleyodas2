import React, { Component } from 'react';
import '../pages/about.css';
import toto from '../assets/he/toto.jpg';
import snowfaceDaphne from '../assets/he/snowfaceDaphne.jpg';
import purpleBlkDaphne from '../assets/he/purpleBlkDaphne.jpg';
import AboutCairns from '../pages/AboutCairns';
import AboutDiet from '../pages/AboutDiet';
import { Card, CardDeck  } from 'react-bootstrap';
import{ BrowserRouter, Link } from 'react-router-dom';


class About extends Component {
    render(){
      return (

<CardDeck className="About">
<br />
        LittleYodas is a small breeder with all dogs living within the house.
        Around children everyday...... Explain more about little yodas and what 
        we are and what we stand for in the best light possible
        <br />
  <Card>
  <Link to="/AboutDiet">
    <Card.Img src={snowfaceDaphne}/>
    <Card.Body>
      <Card.Title>Diet And Maintence</Card.Title>
      <Card.Text>
        Inforation on healthy treats, better food, exercise, grooming technics and chocies
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Link>
  </Card>
  
  <Card>
  <Link to="/AboutCairns">
    <Card.Img variant="top" src={toto} />
    <Card.Body>
      
      <Card.Title>About Cairn Terrier</Card.Title>
      <Card.Text>
        Is a Cairn Terrier the Right breed for you?
        Here is more Information.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Link>
  </Card>
  <Card>
  <Link to="/AboutCairnCare">
    <Card.Img variant="top" src={purpleBlkDaphne} />
    <Card.Body>
      <Card.Title>Cairn Care</Card.Title>
      <Card.Text>
        Grooming Technics, Requirements and more Information
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Link>
  </Card>
</CardDeck>
        
        

        

      ); 
    }
  }

  export default About;
  