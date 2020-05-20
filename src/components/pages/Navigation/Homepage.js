import React, { Component } from 'react';
import { Modal, Button, Card, CardDeck, Carousel, Tab, Tabs} from "react-bootstrap";
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PuppyPackage from '../Home/PuppyPackage';
import PuppyRec from '../Home/PuppyRec';
import { puppies } from '../Home/Puppies';
import MeetParents from '../Home/Parents/MeetParents';
import PuppyCard from '../Home/PuppyCard';
import PuppiesList from '../Home/PuppiesList';
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
       
        <div className="bg">
         
        <PuppiesList puppies={puppies} />
        
        
  
</div>
        

      ); 
    }
  }
  
  
  export default Homepage;