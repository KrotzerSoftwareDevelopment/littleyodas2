import React, { Component } from 'react';
import{ Link } from 'react-router-dom';
import { Card, CardDeck  } from 'react-bootstrap';


class Maintence extends Component {
    render(){
      return (

<CardDeck className="AboutCairns">
<br />
        LittleYodas is a small breeder with all dogs living within the house.
        Around children everyday...... Explain more about little yodas and what 
        we are and what we stand for in the best light possible
        <br />
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Diet And Maintence</Card.Title>
      <Card.Text>
        Inforation on healthy treats, better food, exercise, grooming technics and chocies
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  <Card>
  <Link to="/AboutCairns">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      
      <Card.Title>About Cairn Terier</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Link>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        
        

        

      ); 
    }
  }

  export default Maintence;
  
  