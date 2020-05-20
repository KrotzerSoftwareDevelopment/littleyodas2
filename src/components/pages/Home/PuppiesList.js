import React from 'react';
import PuppyCard from './PuppyCard';

const PuppiesList = ({ puppies }) => {
    const PuppyCardComponent = puppies.map((user, i) => {
        return <PuppyCard id={puppies[i].id} name={puppies[i].name} gender={puppies[i].gender} status={puppies[i].status} />
    })
    return (
<div>
    {PuppyCardComponent}
</div>
    );
}
export default PuppiesList;