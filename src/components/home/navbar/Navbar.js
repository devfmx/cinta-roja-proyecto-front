import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg ">
                <span className="navbar-brand mb-0 h1 text-white">FakebookWall</span>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/"><spam className="nav-link text-white">Wall <span className="sr-only">(current)</span></spam></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user"><spam className="nav-link text-white" href="#">Users</spam></Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )   
    }
}

export default Navbar