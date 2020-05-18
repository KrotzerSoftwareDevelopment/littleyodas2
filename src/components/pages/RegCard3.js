import React, { Component } from 'react';
import TermsAndCond from './TermsAndCond';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class RegCard3 extends Component {
    
    render(){
      return (
        <form className="RegCard">
    
        <h1> Terms And Conditions </h1>
        <input  type="checkbox" />
        <label> I agree to the <Link to="/TermsAndCond">Terms And Conditions</Link>
        </label>
        <br />
        <input  type="checkbox" />
        <label> I want to receive newsletter
        </label>
        <br />
        <Link to="/RegCard2"><Button>  Previous </Button> </Link>
        <Link to="/RegCard4"><Button>  Submit </Button> </Link>
        </form>

      ); 
    }
  }
  export default RegCard3;