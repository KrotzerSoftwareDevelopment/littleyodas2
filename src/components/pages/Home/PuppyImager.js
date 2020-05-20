import React from 'react';
import './puppycard.css';
import { CardGroup, Card} from 'react-bootstrap';
import { PuppyImg } from './PuppyImg';

const PuppyImager = (props) => {
    return (
        <CardGroup>
        
        <img src={props.image}/>
            
        </CardGroup>
    );
}
export default PuppyImager;