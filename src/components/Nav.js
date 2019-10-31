import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-dark">
                <Link to="/" className="nav nav-link">Home</Link>
                <Link to='/tasks' className="nav nav-link">All Tasks</Link>
                <Link to="/new" className="nav nav-link">Create Task</Link>
            </nav>
        );
    }
}