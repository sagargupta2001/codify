import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';
import logo from './icon-light.png';


class Navbar extends Component{

    constructor(props){
        super();
        this.state = {
            'activePath': window.location.pathname === '/' ? 'home' : window.location.pathname.substring(1)
        };
        const title = this.state.activePath;
        document.title = "CodeFolio | " + title[0].toUpperCase() + title.substring(1);
    }

    handleNavigation = (event) => {

        const path = event.target.name;

        this.setState({
        'activePath': path
        })
        document.title = "CodeFolio | " + path[0].toUpperCase() + path.substring(1);
    }


    render(){

        return( 
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} className='logo' alt="CodeFolio"/> Code<span>Folio</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-list">
                            <li className="nav-item ">
                                <Link 
                                    className={this.state.activePath==="home" ? "nav-link active" : "nav-link"} 
                                    onClick={this.handleNavigation} 
                                    name="home" 
                                    aria-current="page" 
                                    to={process.env.PUBLIC_URL + "/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={this.state.activePath==="explore" ? "nav-link active" : "nav-link"} 
                                    onClick={this.handleNavigation} 
                                    name="explore" 
                                    to={process.env.PUBLIC_URL + "/explore"}>Explore</Link>
                            </li>
                        </ul>
                        <button className='action-btn btn btn-primary'>Register</button>
                        <button className='action-btn btn btn-secondary'>Login</button>

                    </div>
                </div>
            </nav>
        )
    } 
}
export default Navbar;