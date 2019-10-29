import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-dark">
                <Link to="/new" className="nav-link">Create Task</Link>
            </nav>
        );
    }
}