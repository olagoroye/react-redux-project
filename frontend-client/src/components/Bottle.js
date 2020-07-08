import React from 'react';
import "./Bottle.css"
import {connect} from 'react-redux'
import {deleteBottle} from '../actions/BottleAction'

// import {Link} from 'react-router-dom'


function Bottle (props){
    return(
        <div className='Bottle'>
            <p>Name:{props.bottle.name} </p>
                <img className="bottleImage" src={props.bottle.img_url} alt={props.bottle.img_url} />
                <p>Brand:{props.bottle.brand}</p>
                <p>Description: {props.bottle.description}</p>
                <p>Price: ${props.bottle.price}</p>
                <button onClick={() => props.deleteBottle(props.bottle.id)}><span role="img" aria-label="red bottle">♻️</span></button>
               <hr/>

        </div>
    )
}

export default connect(null, {deleteBottle}) (Bottle)


               