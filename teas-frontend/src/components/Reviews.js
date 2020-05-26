import React from 'react'
import {connect} from 'react-redux'
import {deleteReview} from '../actions/teasFetch'
// import { render } from 'react-dom'

const Reviews = (props) => {
    //  console.log(props.review)

    const handleDelete = (review) =>{
        props.deleteReview(review.id, review.account_id)

    }
    return(
        <div>
         {props.reviews && props.reviews.map(review =>
           <li key={review.id}>{review.comment} <button onClick={() => handleDelete(review)}>Delete</button></li> 
            )}
        </div>
    )   
}//functional component
export default connect(null, {deleteReview})(Reviews)