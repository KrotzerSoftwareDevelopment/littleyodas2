import React from 'react';
import './puppycard.css';
import { CardGroup, Card} from 'react-bootstrap';
import PuppyImager from './PuppyImager';
import { PuppyImg } from './PuppyImg';
const PuppyCard = (props) => {
    return (
        <CardGroup>
        <Card>
        <PuppyImager id={PuppyImg[0].id} image={PuppyImg[0].image}/>

        <Card.Title> {props.name} </Card.Title>
        
        
            <p>{props.gender}</p>
            </Card>
        </CardGroup>
    );
}
export default PuppyCard;