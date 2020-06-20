import React, { Component } from 'react'


class BottleForm extends Component {
    state = {
        name: "",
        brand: "",
        price: "",
        img_url: "",
        description: "",
     
    }
    handleChange =(event) =>{
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        // const [name,price,description,brand,img_url] = e.target.querySelectorAll('input')
        // const bottle = {
        //     name: name.value,
        //     price: price.value,
        //     description: description.value,
        //     brand: brand.value,
        //     img_url: img_url.value
        // }
        // console.log(bottle)
        this.props.addBottle(this.state)
           this.setState({
            name: "",
            brand: "",
            price: "",
            img_url: "",
            description: ""
           })
        
    }

    render() {
        console.log('form')
        return (
        
            <div>
                <form id="bottle-form" onSubmit={this.handleSubmit}>
                <h1>Add Me A Bottle</h1>
                <label className="black-text left"htmlFor="name">Bottle Name: </label>
                <input name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/><br/>

                 <label className="black-text left"htmlFor="name">Bottle Brand:</label>
                <input name="brand" placeholder="brand" onChange={this.handleChange} value={this.state.brand}/><br/>

                
                 <label className="black-text left"htmlFor="name">Bottle Descipt:</label>
                <input name="description" placeholder="description" onChange={this.handleChange} value={this.state.description} /><br/>

                 <label className="black-text left"htmlFor="name">Bottle Image:</label>
                <input name="img_url" placeholder="img_url" onChange={this.handleChange} value={this.state.img_url}/><br/>

                
                 <label className="black-text left"htmlFor="name">Bottle Price:</label>
                <input name="price" placeholder="price" onChange={this.handleChange} value={this.state.price} /><br/>
                
                <input style={{borderRadius: "22px" , width: "100%"}}className="btn blue" type="submit" value="Add Bottle"/>

                </form>
                
            </div>
        )
    }
}




export default BottleForm;