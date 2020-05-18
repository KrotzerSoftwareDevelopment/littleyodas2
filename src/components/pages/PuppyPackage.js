import React, { Component } from 'react';
import { Button, label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class PuppyPackage extends Component {
    render(){
      return (
        <div className="PuppyPackage">
        <div>
       <form>
         <br/>
         <br/>
         <label><u>Whats Included in the purchase of the puppy price also known as the puppy package.</u></label>
         <br />
         <label></label>
         <br />
         <label>Shipping create</label>
         <br />
         <label>Show Potential: Yes</label>
         <br />
         <label>Champion Bloodlines: Yes</label>
         <br />
         <label>Champion Sired: No</label>
         <br/>
         <label>Birth Color: Black Brindle </label>
         <br />
         <label>Mother: Daphne AKC Registered</label>
         <br />
         <label>Father: Yoda AKC Registered</label>
         <br />
       </form>
        </div>
        </div>

      ); 
    }
  }
  export default PuppyPackage;