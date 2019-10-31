import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Input from './Input';
import Axios from 'axios';

export default class New extends Component{
    constructor(){
        super();
        this.state ={
            task: {
                title: '',
                description: '',
                completed: false
            },
            redirect: false
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.createTask = this.createTask.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleTitle(e){
        let value = e.target.value;
        this.setState(prevState =>({ task:
            {...prevState.task, title: value}
        }))
    }

    handleDescription(e){
        let value = e.target.value;
        this.setState(prevState => ({task:
            {...prevState.task, description: value}
        }))
    }
    createTask(e){
        e.preventDefault();
        const task = this.state.task;
        console.log("IT WORKEd!")

        Axios.post('http://localhost:5000/task/create',task)
            .then(result => {
                console.log(result);
                this.clearForm();
            })
            .catch(err => {
                console.log(err);
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
        if(this.state.redirect === true){
            return <Redirect to='/tasks' />
        }
        else{
            return(
                <div className="container">
                
                    <h4 className="text-center">Create a New Task!</h4>
                    <form onSubmit={this.createTask}>
                    <Input
                        id={'title'}
                        name={'title'}
                        type={'text'}
                        value={this.state.task.title}
                        handleChange={this.handleTitle}
                        placeholder={'Title...'}
                    />
                    <Input 
                        id={'description'}
                        name={'description'}
                        type={'text'}
                        value={this.state.task.description}
                        handleChange={this.handleDescription}
                        placeholder={'Description...'}
                    />
                    <div className="form-group row justify-content-center">
                        <input 
                            className="btn btn-primary"
                            type="submit"
                            value="Create Task"
                        />
    
                    </div>
    
                    </form>
                </div>
            );

        }
    }
}