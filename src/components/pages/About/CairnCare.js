import React, { Component } from 'react';
import { Button, Card, CardDeck  } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';

class CairnCare extends Component {
    render(){
      return (
        <Card>

<Card.Body>

        <form className="AboutCairnCare">
   
    <h1> Cairn Care </h1>
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
  export default CairnCare;