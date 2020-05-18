import React from 'react';
import { connect } from 'react-redux'
import {fetchTeas} from '../actions/teasFetch'
import Teas from '../components/Teas'
import TeasInput from '../components/TeasInput'

class TeasContainer extends React.Component {

    componentDidMount(){
         this.props.fetchTeas() //fetches all our teas from API
    }

    render(){
        return(
            <div>
               <TeasInput/>
               <Teas teas={this.props.teas}/>
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