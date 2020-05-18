import React, { Component } from 'react';
import '../pages/Home.css';
class Login extends React.Component {
    render(){
      
      
      
      return (
        
<Card className="text-center">
<div className="Login Modal">
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
  
  
  export default Login;