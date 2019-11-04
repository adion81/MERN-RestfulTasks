import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-dark justify-content-start ">
                <Link to="/" className="nav nav-link text-warning">Home</Link>
                <Link to='/tasks' className="nav nav-link text-warning">All Tasks</Link>
                <Link to="/new" className="nav nav-link text-warning">Create Task</Link>
            </nav>
        );
    }
}