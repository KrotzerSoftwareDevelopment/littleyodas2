import React, { Component } from 'react';

import { Button, Card } from 'react-bootstrap';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RegCard1 from '../Registration/RegCard1';
import RegCard2 from '../Registration/RegCard2';
import RegCard3 from '../Registration/RegCard3';
import RegCard4 from '../Registration/RegCard4';

class Signup extends Component {
    
    render(){
     
      return (
        <div className="signup">
        <Router>
        <div className="RegNavi">
        <Link to="/RegCard1">
          <Button>
          
            Account
          </Button>
          </Link>


          <Link to="/RegCard2">
          <Button>
          
            Contact
          </Button>
          </Link>
          <Link to="/RegCard3">
          <Button>
          
            Terms And Conditions
          </Button>
          </Link>
          <Link to="/RegCard4">
          <Button>
          
            Finish
          </Button>
          </Link>
          
          </div>
          
          <Route exact path='/RegCard1' component={RegCard1} />
       <Route exact path='/RegCard2' component={RegCard2} />
       <Route exact path='/RegCard3' component={RegCard3} />
       <Route exact path='/RegCard4' component={RegCard4} />
       
          </Router>
        </div>

          
          
  
 
    

     
      ); 
    }
  }
  export default Signup;