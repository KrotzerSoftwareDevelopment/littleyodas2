import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class RegCard2 extends Component {
    
    render(){
      return (
        <Card className="RegCard">
<Card.Title> Contact </Card.Title>
        <Card.Body>
        <label> First Name:   
        <input  type="text" />
        </label>
        <br />
        <label> Last Name:   
        <input  type="text" />
        </label>
        <br />
        <label> Phone Number:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <label> Street Address:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <label> City:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <label> State:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <label> Zip Code:   
        <input  type="interger" className="CardInput" />
        </label>
        <br />
        <Link to="/RegCard1"><Button>  Previous </Button> </Link>
        <Link to="/RegCard3"><Button>  Next </Button> </Link>
 
</Card.Body>
</Card>

      ); 
    }
  }
  export default RegCard2;