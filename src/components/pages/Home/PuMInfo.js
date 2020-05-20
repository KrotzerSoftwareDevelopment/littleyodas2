import React, { Component } from 'react';

class PuMInfo extends React.Component {
    render() {
        return (
           
               <ul>
                    {this.props.puppies.name} {this.props.puppies.gender}
                    
                </ul>
            
        )
    }
}
export default PuMInfo;