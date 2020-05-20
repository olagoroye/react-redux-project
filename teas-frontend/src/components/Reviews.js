import React from 'react'
// import { render } from 'react-dom'

const Reviews = (props) => {
    //  console.log(props.review)

    const handleDelete = () =>{
        
    }

    return(
        <div>
         {props.reviews && props.reviews.map(review =>
           <li key={review.id}>{review.comment} <button onClick={handleDelete}>Delete</button></li> 
            )}
        </div>
    )

    
}
export default Reviews