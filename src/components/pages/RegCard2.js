import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class RegCard2 extends Component {
    
    render(){
      return (
        <form className="RegCard">
    
        <h1>Contact Information</h1>
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
        </form>


      ); 
    }
  }
  export default RegCard2;