import React from 'react';
import "./Bottle.css"

export default class Bottle extends React.Component {
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
        return (
          <div className='Bottle'>
                
                <p>Name:{this.props.bottle.name} </p>
                <img className="bottleImage" src={this.props.bottle.img_url} alt={this.props.bottle.img_url} />
                <p>Brand:{this.props.bottle.brand}</p>
                <p>Description: {this.props.bottle.description}</p>
                <p>Price: ${this.props.bottle.price}</p>
                <p>{this.state.likes}</p>
                <button onClick={this.handleLike}> <span role="img" aria-label="red tea">👍</span></button>
                <button onClick={() => this.props.removeBottle(this.props.bottle.id)}><span role="img" aria-label="red tea">♻️</span></button>
               <hr/>
            </div>
        )
    }
}



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


               