import React, { Component } from 'react';


/*{
import CairnInfo from '../pages/About/CairnInfo';
import CairnCare from '../pages/About/CairnCare';
import Maintence from '../pages/About/Maintence';
}*/
import { Card, CardDeck  } from 'react-bootstrap';
import{ BrowserRouter, Link } from 'react-router-dom';


class About extends Component {
    render(){
      return (

<CardDeck className="About">
<p>hello</p>
<br />
<br />
<Card>
        LittleYodas is a small breeder with all dogs living within the house.
        Around children everyday...... Explain more about little yodas and what 
        we are and what we stand for in the best light possible
        

 
  <Link to="/Diet">
    <Card.Img />
    <Card.Body>
      <Card.Title>Diet</Card.Title>
      <Card.Text>
        Inforation on healthy treats, better food, exercise, grooming technics and chocies
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Link>
  </Card>
 {/* Maintence Card */}
  <Card>
  <Link to="/Maintence">
    <Card.Img />
    <Card.Body>
      <Card.Title>Maintence</Card.Title>
      <Card.Text>
        Inforation on healthy treats, better food, exercise, grooming technics and chocies
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Link>
  </Card>

   {/* Cairn Info Card */}
  <Card>
  <Link to="/CairnInfo">
    <Card.Img variant="top"  />
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
 
  {/* Cairn Care Card*/}
  <Card>
  <Link to="/CairnCare">
    <Card.Img variant="top"  />
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
  