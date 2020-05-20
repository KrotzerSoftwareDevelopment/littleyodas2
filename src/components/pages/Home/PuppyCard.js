import React from 'react';
import './puppycard.css';
import { CardGroup, Card} from 'react-bootstrap';
import {Button, Modal, Carousl, Tabs, Tab} from 'react-bootstrap';
const PuppyCard = (props) => {
    return (
        <Card className="cardContainer">
 
    <Card.Img variant="top"  id="harley" />
    <Card.Body>
      <Card.Title>Name: Harley
      </Card.Title>
      <div className="firstpuppytextcard">
      <Card.Text>
        
        
        

      </Card.Text></div>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('harley')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal size="lg" 
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


    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 src="harley"></h3>
      <p>Miss Red when she was First Born!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>CAption here</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>With my Siblings</h3>
      <p>Very warm and happy.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
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
            <Tabs defaultActiveKey="PuppyRec" transition={false} id="noanim-tab-example" >
  <Tab eventKey="puppyRec" title="PuppyRec" >
<PuppyRec />
  </Tab>
  <Tab eventKey="puppyPackage" title="PuppyPackage" >
    <PuppyPackage />
  </Tab>
  <Tab eventKey="meetParents" title="MeetParents" >
    <MeetParents />
  </Tab>
</Tabs>
            
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


    );
}

export default PuppyCard;