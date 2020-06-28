import React from 'react';
import {fetchBottles} from './actions/BottleAction'
import {connect} from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import BottleForm from './container/BottleForm'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'


import BottlesContainer from './container/BottlesContainer';
import Style from './components/Style';
import './App.css';



class App extends React.Component {
    
  componentDidMount(){
  this.props.fetchBottles()

}

  render (){
    
        return (
        
          <div className="App">
            
            <NavBar/>
              <Style>
              <Switch>
                    <Route exact path='/bottles/new' component={BottleForm}/>
                    <Route path="/bottles" component={BottlesContainer}/>
                    <Route path="/" component={Home}/>
              </Switch>
              </Style>
          </div>
         
        );
    }
  
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchBottles: () => dispatch(fetchBottles())
  }
}
const mapStateToProps = state =>{
  return {
    bottles: state.bottles
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);





