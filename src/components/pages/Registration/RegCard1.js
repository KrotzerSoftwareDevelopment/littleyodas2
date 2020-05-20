import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class RegCard1 extends Component {
    
    render(){
      return (
        <Card className="RegCard">

<Card.Body>
<Card.Title> Account </Card.Title>
        
   
   
        <label> Email:   
        <input  type="text" />
        </label>
        <br />
        <label> Password:   
        <input  type="text" />
        </label>
        <br />
        <label> Repeat Password:   
        <input  type="text" className="CardInput" />
        </label>
        <br />
        <Link to="/RegCard2"><Button>  Next </Button> </Link>


       
  
  </Card.Body>
</Card>
        

      ); 
    }
  }
  export default RegCard1;