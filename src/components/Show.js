import React, { Component } from 'react';
import Update from './Update';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Show extends Component{

    constructor(props){
        super(props)
        this.state = {
            task: {},
            redirect: false
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }
    componentDidMount(){
        const { id } = this.props.match.params
        Axios.get(`http://localhost:5000/api/task/${id}`)
            .then(result => {
                this.setState(prevState => ({task : result['data']['results']}))
            })
    }
    handleInputChange(e){
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => ({ task:
            {...prevState.task,[name]: value}
        }))
    }
    handleUpdate(e){
        e.preventDefault();
        Axios.put(`http://localhost:5000/api/task/update/${this.state.task._id}`,this.state.task)
            .then(result => {
                this.clearForm();
            })
    }
    clearForm(){
        this.setState(prevState => ({ task:
            {...prevState.task, title: '', description: ''}

        }))
        this.setState(prevState => ({redirect: true
            
        }))
    }
    render(){
        if(this.state.redirect){
            return <Redirect to='/tasks' />
        }
        else{
            return(
                <div className="container" >
                    <div className="row justify-content-around">
                        <div className="col-5 text-center bg-dark text-light">
                            <h3 className="pt-2 text-warning">{this.state.task.title}</h3>
                            <p>{this.state.task.description}</p>
                            <p>{this.state.task.completed ? 'Completed':'Not Completed'}</p>
                        </div>
                        <Update 
                            task={this.state.task}
                            handleUpdate={this.handleUpdate}
                            handleInput={this.handleInputChange}
                            
                        />
                    </div>
                </div>
            );
        }
    }
}