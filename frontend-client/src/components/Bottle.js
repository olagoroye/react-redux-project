import React from 'react';
import "./Bottle.css"
import {connect} from 'react-redux'
import {deleteBottle} from '../actions/BottleAction'
import {updateBottle} from '../actions/BottleAction'
// import {Link} from 'react-router-dom'


class Bottle extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         likes: 0
    //     }
    // }
    state = {
        likes: 0
    }

    handleLike = () =>{
       
       this.setState((prevState) =>{
       
           return {likes: prevState.likes +1}
       })
    
    }

  

    render() {
        // let bottle = this.props.bottles.find(bottle=> bottle.id ===this.props.match.params.id)
        return (
          <div className='Bottle'>
               
                <p>Name:{this.props.bottle.name} </p>
                <img className="bottleImage" src={this.props.bottle.img_url} alt={this.props.bottle.img_url} />
               
                <p>Brand:{this.props.bottle.brand}</p>
               
                 <p><strong> Description: {this.props.bottle.description} </strong></p>
               {/* <Link to={`/bottles/${this.props.bottle.id}`}</Link> */}
                {/* <Link to={`/bottles/${this.props.bottle.id}`}>Desc</Link> */}
               
                <p>Price: ${this.props.bottle.price}</p> <br/>
               
                <p>{this.state.likes}</p>
                
                <button onClick={this.handleLike}> <span role="img" aria-label="red tea">👍</span></button>
                <button onClick={() => this.props.deleteBottle(this.props.bottle.id)}><span role="img" aria-label="red bottle">♻️</span></button>
                {/* <button onClick={() => this.props.updateBottle(this.props.bottle.id)}>Edit</button> */}
               <hr/>
            </div>
        )
    }
}
export default connect(null, {deleteBottle,updateBottle}) (Bottle)


// function Bottle (props){
//     return(
//         <div>
//             <p>Name:{props.bottle.name} </p>
//                 <img className="bottleImage" src={props.bottle.img_url} alt={props.bottle.img_url} />
//                 <p>Brand:{props.bottle.brand}</p>
//                 <p>Description: {props.bottle.description}</p>
//                 <p>Price: ${props.bottle.price}</p>
//                <hr/>
//         </div>
//     )
// }

// export default Bottle;


               