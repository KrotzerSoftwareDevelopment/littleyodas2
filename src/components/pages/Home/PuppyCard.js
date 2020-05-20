import React from 'react';
import './puppycard.css';
import { CardGroup, Card} from 'react-bootstrap';
import {Button, Modal, Carousel, Tabs, Tab} from 'react-bootstrap';
import PuppyRec from './PuppyRec';
import PuppyPackage from './PuppyPackage';
import MeetParents from '../Home/Parents/MeetParents';
import PuppiesList from './PuppiesList';
const PuppyCard = ({status, name, gender}) => {
    
    return (
        <Card className="cardContainer">
 
    <Card.Img variant="top"  id="harley" />
    <Card.Body>
      <Card.Title>{name}
      </Card.Title>
      <div className="puppytextcard">
      <Card.Text>
        <div className="puppyDetails">
        {gender}
        

</div>
      </Card.Text></div>
      {status}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Avalible to leave our home to yours by July</small>
    </Card.Footer>
  </Card>


    );
}

export default PuppyCard;