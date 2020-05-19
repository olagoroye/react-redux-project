import React from 'react'
import Tea from './Tea'

//functional presenting => render the list of teas
//props are passed in as an arguement in functional component
 const Teas = (props)=> {
    //  console.log(props)
     return(
    <div>
       {props.teas.map(tea => 
        <div key={tea.id}> <Tea tea= {tea}/> </div>   )}

         </div>
     )
     

 }

 export default Teas


// { {props.teas.map ( tea => <li>
       //         <Link key={tea.id} to={`/teas/${tea.id}`}>{tea.name} {tea.brand} {tea.description}</Link>
         //   </li>)} }
