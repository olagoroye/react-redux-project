import React from 'react';
import {connect } from 'react-redux';
import TeasContainer from './containers/TeasContainer'

import './App.css';
// class componet
 class App extends React.Component {


  render(){
    return (
      <div className="App">
      <TeasContainer/>
       
      </div>
    );
  }
  
}

export default connect() (App);





  // {/* <img src={logo} className="App-logo" alt="logo" /> */}