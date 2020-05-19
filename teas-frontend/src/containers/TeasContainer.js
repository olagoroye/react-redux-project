import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchTeas} from '../actions/teasFetch'
import Teas from '../components/Teas'
import Tea from '../components/Tea'
import TeasInput from '../components/TeasInput'

class TeasContainer extends React.Component {

    componentDidMount(){
         this.props.fetchTeas() //fetches all our teas from API
    }

    render(){
        return(
            <div>
                <Route path='/teas/new' component={TeasInput}/>
                <Route path='/teas/:id' render = {(routerProps) =><Tea {...routerProps} teas={this.props.teas}/> } />
                <Route exact path='/teas' render = {(routerProps) =><Teas {...routerProps} teas={this.props.teas}/> } />
               {/* <TeasInput/> */}
               {/* <Teas teas={this.props.teas}/> */}
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
export default connect (mapStateToProps, {fetchTeas})(TeasContainer)