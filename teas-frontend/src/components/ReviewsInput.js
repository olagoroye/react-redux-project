import React from 'react'
import {connect} from 'react-redux'
import {addReview} from '../actions/teasFetch'


class ReviewsInput extends React.Component{
state ={
    comment: ''
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })

}
// can't find id......
handleSubmit = (event) =>{
    event.preventDefault() 
    this.props.addReview(this.state, this.props.tea.id)
    this.setState({
        comment: ''
    })

}

render (){
return(
    <div>
        <form onSubmit={this.handleSubmit}>
            <label>Write your Comment:
            <input type='text' placeholder='Comment' name='comment' value={this.state.comment} onChange={e => this.handleChange(e)} />
            </label><br/><br/>
            <input type="submit" value="Add Review"/>
        </form>

    </div>
)
}


}

export default connect(null, {addReview})(ReviewsInput)