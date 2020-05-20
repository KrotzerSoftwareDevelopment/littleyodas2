import React from 'react';
import './puppycard.css';
import { CardGroup, Card} from 'react-bootstrap';


const PuppyImager = (props) => {
    return (
        <CardGroup>
        <Card>
        <img src={props.src}/>
            </Card>
        </CardGroup>
    );
}
export default PuppyImager;