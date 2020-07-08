import React from 'react'
import Bottles from '../components/Bottles'
import {connect} from 'react-redux'


class BottlesContainer extends React.Component{

    render(){
        
        // console.log(this.props.bottles)
       
        
        return(
            <div>
               
                
                <Bottles bottles ={this.props.bottles}/>
                
             
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        bottles: state.bottles 
    }
}
export default connect(mapStateToProps)(BottlesContainer)