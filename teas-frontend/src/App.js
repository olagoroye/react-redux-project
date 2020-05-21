import React from 'react';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import {fetchTeas} from './actions/teasFetch'
import TeasInput from './components/TeasInput'
// import ReviewsContainer from './containers/ReviewsContainer'
import { Switch, Route } from 'react-router-dom'
import {connect } from 'react-redux';
import TeasContainer from './containers/TeasContainer'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

 class App extends React.Component {

  componentDidMount(){
    this.props.fetchTeas() //fetches all our teas from API
}


  render(){
    return (
      <Container className="p-3">
         <Jumbotron>
          <div className="App">
            <h1>Get The Tasters</h1>
       
              <NavBar />
              <Switch>
            
              <Route exact path="/teas/new" component={TeasInput}/>
              <Route path="/teas" component={TeasContainer}/>
              <Route path="/" component={Home}/>

              </Switch>
           
          </div>
        </Jumbotron>
      </Container>
    );
  }
  
}

export default connect(null, {fetchTeas}) (App);





  // {/* <img src={logo} className="App-logo" alt="logo" /> */}