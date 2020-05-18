import React, { Component } from 'react';
import { Modal, Button, Card} from "react-bootstrap";
import Signup from './Signup';
import '../pages/Home.css';
class Login extends React.Component {
  

    
    render(){
      
      
      
      return (
        
<Card className="RegCard">
  

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
    <Button> Signup</Button>
    
              
  </Card.Body>

</Card>
      ); 
    }
  }

  
  export default Login;