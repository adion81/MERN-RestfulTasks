import React, { Component } from 'react';
import Input from './Input';

export default class Update extends Component{
    render(){
        const { task, handleUpdate, handleInput } = this.props;
        return(
            <form onSubmit={handleUpdate} className="col-6 bg-dark text-light p-3">
                <h3 className="text-warning text-center p-2">Edit this task</h3>
                <Input 
                    id={'title'}
                    name={'title'}
                    type={'text'}
                    value={task.title}
                    handleChange={handleInput}
                    className="mx-auto"
                />
                <Input 
                    id={'description'}
                    name={'description'}
                    type={'text'}
                    value={task.description}
                    handleChange={handleInput}
                />
                <div className="form-group row justify-content-center">
                        <input 
                            className="btn btn-outline-warning btn-dark"
                            type="submit"
                            value="Edit Task"
                        />
                    </div>
            </form>
        );
    }
}