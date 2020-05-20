import React from 'react'
// import { render } from 'react-dom'

const Reviews = (props) => {

    //  console.log(props.review)

    return(
        <div>
         {props.reviews && props.reviews.map(review =>
           <li key={review.id}>{review.comment}</li> 
            )}
        </div>
    )

    
}
export default Reviews