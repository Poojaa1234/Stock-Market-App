import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <>
        <nav className="navbar navbar-dark bg-dark container">
        <h6><Link to ="/">Home </Link></h6>
            <h6><Link to ="/">Stock Market App</Link></h6>
            <h6><Link to ="/view">View </Link></h6>
        </nav>
        
</>
    )

}
export default Navbar;