import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../src/index.css';

import Homepage from'../src/components/pages/Homepage';
import About from'../src/components/pages/About';
import Contact from'../src/components/pages/Contact';
import Account from'../src/components/pages/Account';
import AboutCairnCare from '../src/components/pages/AboutCairnCare';
import AboutCairns from '../src/components/pages/AboutCairns';
import AboutDiet from '../src/components/pages/AboutDiet';
import MeetParents from '../src/components/pages/MeetParents';
import PuppyRec from '../src/components/pages/PuppyRec';
import PuppyPackage from '../src/components/pages/PuppyPackage';
import RegCard1 from '../src/components/pages/RegCard1';
import RegCard2 from '../src/components/pages/RegCard2';
import RegCard3 from '../src/components/pages/RegCard3';
import RegCard4 from '../src/components/pages/RegCard4';
import Signup from'../src/components/pages/Signup';
import Footer from '../src/components/pages/Footer';
import Navigation from './components/pages/Navigation';
import TermsAndCond from './components/pages/TermsAndCond';

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
       <Route exact path='/AboutCairns' component={AboutCairns} />
       <Route exact path='/AboutCairnCare' component={AboutCairnCare} />
       <Route exact path='/AboutDiet' component={AboutDiet} />
       <Route exact path='/MeetParents' component={MeetParents} />
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
