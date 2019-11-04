import React, { Component } from 'react';
import Axios from 'axios';
import Task from './Task';
import { Redirect } from 'react-router-dom';

export default class AllTasks extends Component{
    constructor(){
        super();
        this.state = {
            allTasks: [],
            redirect: false,
            showId: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.getTasks = this.getTasks.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }
    componentWillMount(){
        this.getTasks();
    }
    getTasks(){
        Axios.get('http://localhost:5000/api/tasks')
            .then(result => {
                this.setState(prevState => ({
                    allTasks : result['data']['results']
                }))
            })
    }
    handleClick(id, completed){
        console.log(id, completed);
        if(completed === false){
            const updateTask = this.state.allTasks.filter(task => task._id === id);
            updateTask[0].completed = true;
            console.log(updateTask[0]);
            Axios.put(`http://localhost:5000/api/task/update/${updateTask[0]._id}`,updateTask[0])
                .then(result => {
                    this.getTasks();
                })
            
        }
        else if(completed === true){
            Axios.delete(`http://localhost:5000/api/task/destroy/${id}`)
            .then(result => {
                this.getTasks();
            })
        }
    }
    createTaskTable(){
        console.log(this.state.allTasks)
        return this.state.allTasks.map(row => {
            return <Task 
                redirect={this.handleShow}
                id={row._id}
                key={row._id}
                title={row.title}
                description={row.description}
                completed={row.completed}
                handleClick={this.handleClick}
            />
        })
    }
    handleShow(id){
        this.setState(prevState => ({
            redirect: true
        }))
        this.setState(prevState => ({showId: id}))
        
    }


    render(){
        if(this.state.redirect){
            return <Redirect to={`/show/${this.state.showId}`} />
        }
        else{
            return(
                <div className="container">
                    <h3 className="text-center">My Tasks</h3>
                    <table className="table table-hover ">
                        <thead>
                            <tr className="text-center bg-dark text-light">
                                <th>Title</th>
                                <th>Description</th>
                                <th>Completed</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allTasks <=0 ? <tr className="text-center"><td>Create some tasks, yo...</td></tr>:this.createTaskTable()}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}