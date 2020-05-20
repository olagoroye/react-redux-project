import React from 'react'
import ReviewsInput from '../components/ReviewsInput'
import Reviews from '../components/Reviews'

// not review inPut not working
class ReviewsContainer extends React.Component{
    render(){
        return (
            <div>
               <ReviewsInput tea={this.props.tea}/><br/>
             
               <Reviews reviews={this.props.tea && this.props.tea.reviews}/>
            </div>
        )
    }
}

    

export default ReviewsContainer