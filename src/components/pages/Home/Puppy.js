import React, { Component } from 'react';

class Puppy extends Component {
    render(){
      return (
        <div>
        {this.props.puppy.name} {this.props.puppy.gender}
        
        
        </div>

        

      ); 
    }
  }

  export default Puppy;
  