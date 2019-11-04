import React, { Component } from 'react';

export default class Info extends Component{
    render(){
        return(
            <div className="p-2 pt-3 mx-auto bg-dark col-4 text-light text-center">
                <p>Welcome to <span className="text-warning">Task Master</span>!  On this site you can create and manage all of your daily tasks and truly be your own Task Master.</p>
            </div>
        );
    }
}