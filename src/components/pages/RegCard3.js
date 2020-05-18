import React, { Component } from 'react';
import TermsAndCond from './TermsAndCond';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class RegCard3 extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };
  }

  handleClose(id) {
    this.setState({show: id});
  }

  handleShow(id) {
    this.setState({show: id});
  }
  
    render(){
      return (
        <Card className="RegCard">
<Card.Title> Terms And Conditions </Card.Title>
        <Card.Body>
        
    
       
        <input  type="checkbox" />
        <label> I agree to the <div className="termsBtnStyle" onClick={() => this.handleShow('terms')}>Terms And Conditions</div>
        
                <h5>See Price and more info</h5>
              
              <Modal  className="PuppiesModal"
              show={this.state.show == 'terms'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Terms
                </Modal.Header>
                <Modal.Body>
                  Terms and Conditions
                  <Button>Agree</Button>
                  <Button>Cancel</Button>
                </Modal.Body>
                </Modal>
        </label>
        
        <input  type="checkbox" />
        <label> I want to receive newsletter
        </label>

        <Link to="/RegCard2"><Button>  Previous </Button> </Link>
        <Link to="/RegCard4"><Button>  Submit </Button> </Link>
     
</Card.Body>
</Card>
      ); 
    }
  }
  export default RegCard3;