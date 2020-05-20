import React, { Component } from 'react';
import { Modal, Button, Card, CardDeck, Carousel, Tab, Tabs} from "react-bootstrap";
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PuppyPackage from '../Home/PuppyPackage';
import PuppyRec from '../Home/PuppyRec';
import { puppies } from '../Home/Puppies';
import MeetParents from '../Home/Parents/MeetParents';
import PuppyCard from '../Home/PuppyCard';
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
        
        <PuppyCard puppies={puppies} />
        
  <Card className="cardContainer">
    {/* harley */}
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

  {/* leo */}
  <Card className="cardContainer">
    <Card.Img variant="top"  id="leo" />
    <Card.Body>
      <Card.Title>Name: Leo
      </Card.Title>
      <div className="firstpuppytextcard">
      <Card.Text>
        
        <br/>
        DOB:    05/10/2020 (1 week old)
        <br/>
        Gender: Male
        <br/>
        <br/>

      </Card.Text></div>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('leo')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal size="lg" 
              show={this.state.show == 'leo'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                Leo
                </Modal.Header>
                <Modal.Body>
                <div class="modal-body">
          <div class="row">
            <div class="col-md-6">

                  
                  
                 
                  
                  <Card>
  <Card.Img>
  
  </Card.Img>
  <Card.Body>
    <Card.Title>Leo</Card.Title>


    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 ></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>2nd Puppy Picture</h3>
      <p>Getting bigger and stronger!.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
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

  </Tab>
  <Tab eventKey="puppyPackage" title="PuppyPackage" >
    <PuppyPackage />
  </Tab>
  <Tab eventKey="meetParents" title="MeetParents" >

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

  {/* milo */}
  <Card className="cardContainer">
    <Card.Img variant="top"  id="harley" />
    <Card.Body>
      <Card.Title>Name: Milo
      </Card.Title>
      <div className="firstpuppytextcard">
      <Card.Text>
        
        <br/>
        DOB:    05/10/2020 (1 week old)
        <br/>
        Gender: Male
        <br/>
        <br/>

      </Card.Text></div>
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('milo')}>
                <h5>See Price and more info</h5>
              </Button>
              <Modal size="lg" 
              show={this.state.show == 'milo'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                milo
                </Modal.Header>
                <Modal.Body>
                <div class="modal-body">
          <div class="row">
            <div class="col-md-6">

                  
                  
                 
                  
                  <Card>
  <Card.Img>
  
  </Card.Img>
  <Card.Body>
    <Card.Title>Milo</Card.Title>


    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
     
      alt="First slide"
    />
    <Carousel.Caption>
      
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <p>Getting bigger and stronger!.</p>
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

  </Tab>
  <Tab eventKey="puppyPackage" title="PuppyPackage" >
    <PuppyPackage />
  </Tab>
  <Tab eventKey="meetParents" title="MeetParents" >
  
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
</CardDeck>
        

      ); 
    }
  }
  
  
  export default Homepage;