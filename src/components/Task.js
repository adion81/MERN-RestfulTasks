import React, { Component } from 'react';

export default class Task extends Component{


    render(){
        console.log(this.props.completed)
        const {id,title, description, completed, handleClick,redirect} = this.props;
        return(
            <tr  id={id}className="text-center" >
                <td onClick={completed === false ? () => redirect(id):''} className="pointer hover-edit" >{title}</td>
                <td>{description}</td>
                <td>{completed === false ? 'NO':'YES'}</td>
                <td>
                    <button 
                        onClick={() => handleClick(id,completed)}
                        className={completed === false ? 'btn btn-success':'btn btn-danger'}
                    >{completed === false ? 'COMPLETE':'DELETE'}</button>
                </td>
            </tr>
        );
    }
}