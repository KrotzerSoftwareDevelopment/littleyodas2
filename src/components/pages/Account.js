import React, { Component } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import Signup from './Signup';
import RegCard1 from './RegCard1';
import RegCard2 from './RegCard2';
import RegCard3 from './RegCard3';
import RegCard4 from './RegCard4';
import '../pages/Home.css';
class Account extends Component {

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
        <Card className="text-center">
<div className="accountModal">
  <Card.Body>
    <Card.Title> Account Login </Card.Title>
    <label> Email:   
        <input  type="text" />
        </label>
        <br />
        <label> Password:   
        <input  type="text" />
        </label>
        <br />
        <label>Forgot Password?</label>
 
    <Button variant="primary"> Login </Button>
    <br />
    <br />
    <br />
    Login With Facebook
    <Button>
    <div class="fb-login-button" data-size="medium" data-auto-logout-link="true">
     Facebook Login 
    </div>
    </Button>
    <br />
    <br />
    Login with Google
    <Button>Google Login</Button>
    <br />
    <br />
    Dont have an account? Signup now!
    <br />
    <Button onClick={() => this.handleShow('Signup')}> Signup</Button>
    <Modal 
              show={this.state.show == 'Signup'} onHide={this.handleClose} >
            <Modal.Header closeButton closeLabel="close window" className="ModalHeader">
              
              LittleYodas - Dogs Are Family
              
                </Modal.Header>
              
              <Signup />
              
              </Modal>
              
  </Card.Body>
  </div>
</Card>

      ); 
    }
  }
  export default Account;