import React from 'react'
import {Link} from 'react-router-dom'
import Style from './Style';



const NavBar = () =>{
    

    return(
       
        <nav className="nav">
            <Style>
                <div className="navigation_bar">
                 
                   <ul className="right">
                     <Link style={{ color: 'green', textDecoration: 'none', display: 'inline', float:'left'}} className="right" to="/">Home</Link> 
                    <li><Link  style={{ color: 'green', textDecoration: 'none',display: 'inline'}} to="/bottles"> Bottles</Link></li>
                    <li ><Link style={{ color: 'green', textDecoration: 'none', display: 'inline', float:'right'}} to="/bottles/new"> New Bottle</Link> </li>
                  </ul>
                </div>
            </Style>
            </nav>
       
    )
}

export default NavBar



