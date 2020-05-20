import React from "react";
import { Link } from 'react-router-dom';

import { Modal, Button, Tab, Tabs} from "react-bootstrap";
import logo from './logo.png';
import Login from '../Registration/Login';
import Signup from '../Registration/Signup';

import RegCard1 from '../Registration/RegCard1';
import RegCard2 from '../Registration/RegCard2';
import RegCard3 from '../Registration/RegCard3';
import RegCard4 from '../Registration/RegCard4';

class Navigation extends React.Component {
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
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" id="navifontLogo" ><Link to="/"><img src={logo} id="logo" /> </Link> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" ><Link to="/About">About</Link></a>
            <a className="nav-item nav-link" ><Link to="/Contact">Contact</Link></a>
            <a className="nav-item nav-link"  onClick={() => this.handleShow('Account')}> Account </a>
            
            <Modal
              show={this.state.show == 'Account'} onHide={this.handleClose} onLoad={this.ControlledModal}
              >
                
              <Modal.Header closeButton closeLabel="close window">
              LittleYodas - Dogs Are Family
                </Modal.Header>
              
    <Tabs defaultActiveKey="login" transition={false} id="noanim-tab-example" >
  <Tab eventKey="login" title="Login" >
    <Login />
  </Tab>
  <Tab eventKey="regCard1" title="Account" className="RegTabs">
    <RegCard1 />
  </Tab>
  <Tab eventKey="regCard2" title="Contact" className="RegTabs">
    <RegCard2 />
  </Tab>
  <Tab eventKey="regCard3" title="Terms" className="RegTabs">
    <RegCard3 />
  </Tab>
  <Tab eventKey="regCard4" title="Finish" className="RegTabs">
    <RegCard4 />
  </Tab>
</Tabs>
  
                
                

                
              </Modal>
              </div>
          </div>
  
        
      </nav>
    ); 
  
  }
}
  export default Navigation;
  