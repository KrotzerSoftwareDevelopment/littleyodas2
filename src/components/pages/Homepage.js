import React, { Component } from 'react';
import { Modal, Button, Card, CardDeck, Nav} from "react-bootstrap";
import Carousels from './Carousels';
import harley1 from '../assets/missred.jpg';
import mrWhite from '../assets/mrWhite.jpg';
import Yoda2 from '../assets/yodatruck-2.png';
import MrBlue from '../assets/Mrblue.jpg';
import PuppyRec from '../pages/PuppyRec';
import Daphne from '../pages/Daphne';
import Yoda from '../pages/Yoda';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../pages/Home.css';
import MeetParents from '../pages/MeetParents';
import harley from '../assets/week1PuppyPics/harley.png'
import PuppyPackage from './PuppyPackage';

class Homepage extends Component {
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
        <CardDeck className="bg">
  <Card className="cardContainer">
    <Card.Img variant="top" src={harley1} id="harley" />
    <Card.Body>
      <Card.Title>Name: Harley
      </Card.Title>
      <div className="firstpuppytextcard">
      <Card.Text>
        
        <br/>
        DOB:    05/10/2020 (1 week old)
        <br/>
        Gender: Female
        <br/>
        <br/>

      </Card.Text></div>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('harley')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal  className="PuppiesModal"
              show={this.state.show == 'harley'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Harley
                </Modal.Header>
                <Modal.Body>
                <div class="modal-body">
          <div class="row">
            <div class="col-md-6">

                  
                  
                 
                  
                  <Card>
  <Card.Img>
  
  </Card.Img>
  <Card.Body>
    <Card.Title>Harley</Card.Title>
    <Carousels />
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
    <Button variant="primary"> Make a Deposit </Button>
    <Button variant="primary"> Pay in Full </Button>
  </Card.Body>
</Card>
                 
                 </div>
                 
            <div class="col-md-6">
            <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="/PuppyRec">My Puppy Details</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/PuppyPackage">Whats Inluded With Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/MeetParents">Meet My Parents</Nav.Link>
          
        
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>

</div>
          </div>
                
                  
                </Modal.Body>
              </Modal>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Avalible to leave our home to yours by July</small>
    </Card.Footer>
  </Card>
  <Card className="cardContainer">
    <Card.Img variant="top" src={MrBlue} id="mrBlueCard" />
    <Card.Body>
      <Card.Title> Name: Milo </Card.Title>
      <Card.Text>
         
        <br/>
        DOB:    05/10/2020 (1 week old)
        <br/>
        Gender: Male
      </Card.Text>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('red')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal  id="PuppiesModal"
              show={this.state.show == 'red'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Mr. Blue
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Mr White has the most fun out of the group
                      
                  </p>
                  <img src={MrBlue} id="mrBlueModal" />
                </Modal.Body>
              </Modal>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="cardContainer">
    <Card.Img variant="top" src={mrWhite} id="mrWhiteCard" />
    <Card.Body>
      <Card.Title> Name: Leo </Card.Title>
      <Card.Text>
        <br/>
        DOB:    05/10/2020 (1 week old)
        <br/>
        Gender: Male
      </Card.Text>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('red')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal  id="PuppiesModal"
              show={this.state.show == 'red'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Mr. White
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Mr Blue has the a great little personality
                      
                  </p>
                  <img src={mrWhite} id="mrWhiteModal" />
                </Modal.Body>
              </Modal>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        

      ); 
    }
  }
  
  
  export default Homepage;