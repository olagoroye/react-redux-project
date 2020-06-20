import React, { Component } from 'react'
import Bottle from '../components/Bottle'
import BottleForm from '../components/BottleForm'




class Bottles extends Component {
    constructor(props){
        super(props)
        this.state={
            bottles: []
        }
    }

    
    
    removeBottle = (id)=>{
        console.log('delete', id)
        this.setState((prevState) =>{
            const filterBottles = prevState.bottles.filter(bottle =>bottle.id !== id)
            return {bottles: filterBottles}
    
        })
    }
    addBottle = (bottle)=>{
        
        this.setState((prevState) =>{
            const id = prevState.bottles[prevState.bottles.length -1].id + 1
            const newBottle = {...bottle, id}
            return {bottles: [...prevState.bottles, newBottle]}
    
        })
    }
    componentDidMount(){
        fetch('http://localhost:3000/api/v1/bottles')
        .then(resp =>resp.json())
        .then(bottles => this.setState({bottles}))

    }
    render() {
        return (
            <div className='BottleContainer'>
              {this.state.bottles.map(bottle =>  <Bottle key={bottle.id} bottle={bottle} removeBottle={this.removeBottle}/>)}
              
              < BottleForm addBottle={this.addBottle}/>
            </div>
           
        )
    }
}
export default Bottles;





