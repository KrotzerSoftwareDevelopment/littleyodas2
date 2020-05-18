import React, { Component } from 'react';
import { Button, label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class PuppyRec extends Component {
    render(){
      return (
        <div className="harleyPuppyInfo">
        <div>
       <form>
         <br/>
         <br/>
         <label><u>Puppy Information</u></label>
         <br />
         <label>Birth Date : 05/10/2020 </label>
         <br />
         <label>Birth Time: 3:35AM</label>
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
  export default PuppyRec;