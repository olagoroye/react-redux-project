import React from 'react'
import "./Tea.css"

// functional componet//show each tea with the associaton
const Tea =(props)=> {
     console.log(props)
    // accessing a specific element in an array
    let tea = props.teas[props.match.params.id -1]
    return (
        <div>
          <h3>{props.tea.name} </h3>
          <img className="TeaImage" src={props.tea.img_url} alt={props.tea.img_url} />
          <p>{props.tea.brand}</p>
          <p>Description: {props.tea.description}</p>
          <p>Price: ${props.tea.price}</p>
        </div>
    )

}

export default Tea