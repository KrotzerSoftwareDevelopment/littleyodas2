import React, { Component } from 'react';
import { Modal, Button, Accordion, Carousel, Jumbotron, Card, CardDeck} from "react-bootstrap";
import Carousels from './Carousels';
import MissRed from '../assets/missred.jpg';
import mrWhite from '../assets/mrWhite.jpg';

import Yoda2 from '../assets/yodatruck-2.png';
import MrBlue from '../assets/Mrblue.jpg';
import PuppyRec from '../pages/PuppyRec';
import Daphne from '../pages/Daphne';
import Yoda from '../pages/Yoda';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../pages/Home.css';
import MeetParents from '../pages/MeetParents';


class Puppies extends Component {
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
        <Card className="PuppiesPage">
      <br />
      <br />
        <Jumbotron id="jumboImg">
  <h1>Welcome, to the puppies page!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
        <CardDeck>
  <Card>
    <Card.Img variant="top" src={MissRed} id="missRedCard" />
    <Card.Body>
      <Card.Title>Name: Harley
      </Card.Title>
      <div className="missredtextcard">
      <Card.Text>
        
        <br/>
        DOB:    05/10/2020 (1 week old)
        <br/>
        Gender: Female
        <br/>
        <br/>

      </Card.Text></div>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('red')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal  id="PuppiesModal"
              show={this.state.show == 'red'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Miss.Red
                </Modal.Header>
                <Modal.Body>
                <div class="modal-body">
          <div class="row">
            <div class="col-md-6">

                  
                  
                 
                  
                  <Card>
  <Card.Img>
  
  </Card.Img>
  <Card.Body>
    <Card.Title>Miss Red</Card.Title>
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
             <PuppyRec />

            <Button onClick={() => this.handleShow('MeetParents')}> Meet My Parents</Button>
    <Modal
              show={this.state.show == 'MeetParents'} onHide={this.handleClose} >
            <Modal.Header closeButton closeLabel="close window">
            
              LittleYodas - Dogs Are Family
                </Modal.Header>
                <Card>
            <Card.Body>
                
         
          <MeetParents />
          </Card.Body>
</Card>

          </Modal>
                

  



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
  <Card>
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
  <Card>
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
        
</Card>
      ); 
    }
  }
  
  
  export default Puppies;