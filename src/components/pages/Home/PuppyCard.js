import React from 'react';
import './puppycard.css';
import { CardGroup, Card} from 'react-bootstrap';
import { PuppyImg } from './PuppyImg';

const PuppyCard = (props) => {
    return (
        <CardGroup>
        <Card>
        <Card.Title> {props.name} </Card.Title>
        <PuppyImg id={PuppyImg[0].id} Imaged={PuppyImg[0].Imaged}/>}
        
            <p>{props.gender}</p>
            </Card>
        </CardGroup>
    );
}
export default PuppyCard;