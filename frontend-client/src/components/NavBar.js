import React from 'react'
import {Link} from 'react-router-dom'
import Style from './Style';
// import { Navbar, Nav} from 'react-bootstrap'

// import { LinkContainer } from 'react-router-bootstrap'


const NavBar = () =>{
    

    return(
       
        <nav className="green darken-3">

            <Style>
              <Link to="/">Home</Link> 
                <ul className="right">
                    <li><Link to="/bottles"> Bottles</Link></li>
                    <li><Link to="/bottles/new"> New Bottle</Link> </li>
                </ul>
            </Style>
            </nav>
       
    )
}

export default NavBar



