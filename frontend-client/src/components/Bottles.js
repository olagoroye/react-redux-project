import React from 'react'
// import {connect} from 'react-redux'
import Bottle from '../components/Bottle'



// const Bottles = (props)=> {

//     return (
//         <div className='bottleContainer'>
      
//      {props.bottles.map(bottle =>  <Bottle key={bottle.id} bottle={bottle}   />)}
      
//    </div>
//     )
// }



// export default Bottles;

class Bottles extends React.Component{
   

    render(){
       
        return(
            <div className='bottleContainer'>
               
               
                {this.props.bottles.length > 0 && this.props.bottles.map(bottle =>  <Bottle key={bottle.id} bottle={bottle}   />)}
              
               </div>
        )
    }
}

export default Bottles;





