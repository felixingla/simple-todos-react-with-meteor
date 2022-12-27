import React from 'react';


/*The Task component takes three props: task, onChecboxClick, and onDeleteClick. 
The task prop is an object that represents a single task, and the onChecboxClick 
and onDeleteClick props are callback functions that are called when the user interacts 
with the component. */
export const Task = ({ task, onChecboxClick, onDeleteClick }) => {
    return <li>
        <input 
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onChecboxClick(task)}
        readOnly
        />
        
        <span >{task.text}</span>

        <button onClick={ () => onDeleteClick(task) }>—</button>

    </li>
}