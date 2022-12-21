import React, { Component } from 'react';


class TaskList extends Component {
    render() {
        const {tareas} = this.props;
        
        return <>
            <h2>Things I need to do:</h2>
            <ul>
                {tareas.map(item => {
                    return <li>{item}</li>;
                })}
            </ul>
        </>
    }
}

export default TaskList;