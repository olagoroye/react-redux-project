import React from 'react'
import {connect} from 'react-redux'
import { editTea } from '../actions/teasFetch'


class TeaEdit extends React.Component{
    state = {
        name: "",
        brand: "",
        price: "",
        img_url: "",
        description: "",
    }
handleChange = (event) => {
    this.setState({ 
        [event.target.name]: event.target.value
    })
}
handleSubmit = (event) =>{
        event.preventDefault()
        let tea = {...this, id: this.props.tea.id}
        this.props.editTea(tea)
        this.setState({
            name: "",
            brand: "",
            price: "",
            img_url: "",
            description: "",
        })
}

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/><br/>
                <input name="brand" placeholder="brand" onChange={this.handleChange} value={this.state.brand}/><br/>
                <input name="description" placeholder="description" onChange={this.handleChange} value={this.state.description}/><br/>
                <input name="img_url" placeholder="img_url" onChange={this.handleChange} value={this.state.img_url}/><br/>
                <input name="price" placeholder="price" onChange={this.handleChange} value={this.state.price} /><br/>
                <input type="submit" value="Edit Tea"/>
                </form>
            </div>
        )
    }
}//controlled form

export default connect (null, {editTea})(TeaEdit)