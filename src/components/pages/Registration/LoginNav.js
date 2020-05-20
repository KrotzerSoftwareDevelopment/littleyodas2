import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Login from '../pages/Login';
import { Modal, Button, Tabs } from "react-bootstrap";
import Account from './Account';
import Signup from './Signup';
import '../pages/Home.css';
import TermsAndCond from "./TermsAndCond";

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ControlledTabs = () => {
    const [key, setKey] = useState('Login');
    }
  render(){
  
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="Signup" title="Signup">
          <Signup />
        </Tab>
        <Tab eventKey="Account" title="Account">
          <Account />
        </Tab>
        <Tab eventKey="TermsAndCond" title="TermsAndCond">
          <TermsAndCond />
        </Tab>
        <Tab eventKey="Finish" title="Finish">
          <Finish />
        </Tab>
      </Tabs>
    ); 
  
  }
}
export default ControlledTabs;
  