import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../src/index.css';

import Homepage from'../src/components/pages/Navigation/Homepage';
import About from'../src/components/pages/Navigation/About';
import Contact from'../src/components/pages/Navigation/Contact';
import Account from'../src/components/pages/Navigation/Account';
import CairnCare from '../src/components/pages/About/CairnCare';
import CairnInfo from '../src/components/pages/About/CairnInfo';
import Diet from '../src/components/pages/About/Diet';
import Maintence from '../src/components/pages/About/Maintence';

import PuppyRec from '../src/components/pages/Home/PuppyRec';
import PuppyPackage from '../src/components/pages/Home/PuppyPackage';
import RegCard1 from '../src/components/pages/Registration/RegCard1';
import RegCard2 from '../src/components/pages/Registration/RegCard2';
import RegCard3 from '../src/components/pages/Registration/RegCard3';
import RegCard4 from '../src/components/pages/Registration/RegCard4';
import Signup from '../src/components/pages/Registration/Signup';
import Footer from '../src/components/pages/App/Footer';
import Navigation from './components/pages/App/Navigation';
import TermsAndCond from './components/pages/Registration/TermsAndCond';


class App extends Component {
  render(){
    return (
      <div>
      <Router>
      <div className="navi">
      <Navigation />
      </div>
      
      <Route exact path='/' component={Homepage} />
       
       <Route exact path='/About' component={About} />
       <Route exact path='/Contact' component={Contact} />
       <Route exact path='/Account' component={Account} />
       <Route exact path='/CairnInfo' component={CairnInfo} />
       <Route exact path='/CairnCare' component={CairnCare} />
       <Route exact path='/Diet' component={Diet} />
       <Route exact path='/Maintence' component={Maintence} />
       <Route exact path='/PuppyPackage' component={PuppyPackage} />
       <Route exact path='/PuppyRec' component={PuppyRec} />
       <Route exact path='/Signup' component={Signup} />
       <Route exact path='/TermsAndCond' component={TermsAndCond} />
      </Router>
      <div className="Footer">
        <br />
        <br />
      <Footer />
      </div>
      </div>
    ); 
  }
}

export default App;
