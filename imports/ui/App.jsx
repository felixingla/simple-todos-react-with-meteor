import React from 'react';
import { Task } from './Task';

/* Array of tasks */  
const tasks = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'},
  {_id: 4, text: 'Fourth Task'},
]

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    
    <ul>
    {/* Iterate over the tasks constant to render the task text as a list */}
      { tasks.map(task => <Task key={ task._id} task={ task }/>)}
    </ul>

  </div>
);