import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class RegCard1 extends Component {
    
    render(){
      return (
        <Card>

<Card.Body>

        <form className="RegCard">
   
    <h1>Account Information</h1>
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


        </form>
  
  </Card.Body>
</Card>
        

      ); 
    }
  }
  export default RegCard1;