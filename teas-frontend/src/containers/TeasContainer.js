import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Teas from '../components/Teas'
import Tea from '../components/Tea'
import TeasInput from '../components/TeasInput'

class TeasContainer extends React.Component {


    render(){
        return(
            <div>
                <Switch>
                <Route exact path='/teas/new' component={TeasInput}/>
                <Route exact path='/teas/:id' render = {(routerProps) =><Tea {...routerProps} teas={this.props.teas}/> } />
                <Route exact path='/teas' render = {(routerProps) =><Teas {...routerProps} teas={this.props.teas}/> } />
              
               </Switch>
            </div>
        );
    }

}
//have access to the teas in our react store
const mapStateToProps = state =>{
    return {
        teas: state.teas
    }
}
export default connect (mapStateToProps)(TeasContainer)