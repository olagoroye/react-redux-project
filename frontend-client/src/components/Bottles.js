import React from 'react'
// import {connect} from 'react-redux'
import Bottle from '../components/Bottle'



const Bottles = (props)=> {

    return (
        <div className='bottleContainer'>
      
     {props.bottles.length > 0 && props.bottles.map(bottle =>  <Bottle key={bottle.id} bottle={bottle}   />)}
      
   </div>
    )
}



export default Bottles;








