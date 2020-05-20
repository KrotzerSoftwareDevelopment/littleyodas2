import React from 'react';
import './puppycard.css';
import { CardGroup, Card, CardDeck, Button} from 'react-bootstrap';
import PuppyRec from './PuppyRec';
import PuppyPackage from './PuppyPackage';
import MeetParents from '../Home/Parents/MeetParents';
const PuppyCard = ({status, name, gender, price}) => {
    
    return (
        <CardDeck className="ModalStyle">
        
        <Card>
 
    <Card.Body>
      <Card.Title>{name}
      </Card.Title>
      
      <Card.Text>
        <div className="puppyDetails">
        {gender}
        

</div>
      </Card.Text>
      {status}
      {price}
      <Button> More Info</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Avalible to leave our home to yours by July</small>
    </Card.Footer>
    </Card>
    
</CardDeck>

    );
}

export default PuppyCard;