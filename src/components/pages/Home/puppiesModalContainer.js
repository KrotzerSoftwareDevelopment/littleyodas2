import React, { Component } from 'react';
import Puppy from './Puppy';
class PuppiesModalContainer extends Component {
    render() {
        return (
           
            
            <li>
                {this.props.puppies.map((puppy)=> {
                    return <Puppy puppy={puppy} key={puppy.id}/>
                })}
                </li>
                
          
        )
    }
}
export default PuppiesModalContainer;