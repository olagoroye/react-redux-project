import React from 'react'
import Bottles from '../components/Bottles'

import {connect} from 'react-redux'


class BottlesContainer extends React.Component{

    state = {sort: false}

    updateSort = (event) =>{
        this.setState({
            sort: !this.state.sort
        })
    }
    render(){
        console.log(this.props.bottles)
        const sortBottles = () =>this.state.sort ? this.props.bottles.sort((a,b) =>{
            return a.brand.toLowercase().localCompare(b.name.toLowercase)
        }) : this.props.bottles
            // retutn a.brand.toLowercase().localeCompare(b.name.toLowercase()) } ) : this.props.bottles
    //    const sortBottles = this.props.bottles.sort(bottle =>{
    //         return bottle.brand.toLowerCase().indexOf(this.state.sort.toLocaleLowerCase) !== -1
    //    })
        
        return(
            <div>
                <button onClick={this.updateSort}> SortMe </button>
                <Bottles bottles ={this.props.bottles}/>
                <Bottles bottles ={sortBottles}/>
             
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