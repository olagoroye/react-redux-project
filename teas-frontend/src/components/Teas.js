import React from 'react'
// import Tea from './Tea'
import {Link} from 'react-router-dom'

 const Teas = (props)=> {
    //  console.log(props)
     return(
    <div>
       {props.teas.map(tea => 
        <div key={tea.id}><Link to={`/teas/${tea.id}`}>{tea.name} {tea.brand} {tea.description}</Link> </div> )}
            
         </div>
     )
     

 }

 export default Teas



 //functional presenting => render the list of teas
//props are passed in as an arguement in functional component