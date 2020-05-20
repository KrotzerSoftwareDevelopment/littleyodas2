import React from 'react';
import './puppycard.css';
const PuppyCard = (props) => {
    return (
        <div className='PuppyCard'>
        <h1>{props.name}</h1>
            <p>{props.gender}</p>
        </div>
    );
}
export default PuppyCard;