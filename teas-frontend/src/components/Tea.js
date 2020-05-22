import React from 'react'
import "./Tea.css"
import { Redirect } from 'react-router-dom'



import ReviewsContainer from '../containers/ReviewsContainer'

// functional componet//show each tea with the associaton
const Tea =(props)=> {
    
    // accessing a specific element in an array
    // let tea = props.teas[props.match.params.id -1]
    let tea = props.teas.filter(tea => tea.id == props.match.params.id)[0]
    console.log(tea)

    return (
         tea ? 
         <div>
          <h2>{tea.name} </h2>
          <img className="TeaImage" src={tea.img_url} alt={tea.img_url} />
          <p>{tea.brand}</p>
          <p>Description: {tea.description}</p>
          <p>Price: ${tea.price}</p>
          <ReviewsContainer tea={tea}/>
          {/* <h3>Edit Tea</h3> <TeaEdit tea={tea}/> */}
        </div> :
        <h2>Tea doesn't exist!</h2>
    )
}

export default Tea