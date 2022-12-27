import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import { TaskForm } from './TaskForm';

// Function to check or uncheck task from TasksCollection
const toggleChecked = ({ _id, isChecked}) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
}

// Function to delete a task from TasksCollection
const deleteTask = ({_id}) => TasksCollection.remove(_id);

// Displays a list of tasks fetched from a Meteor collection called TasksCollection
export const App = () => {

  // Declare state variable to filter tasks based on completion status
  const [hideCompleted, setHideCompleted] = useState(false);

  // Declare filter object to hide completed tasks (i.e. tasks with isChecked property set to true)
  const hideCompletedFilter = { isChecked: { $ne: true}};

  // Declare tracker function to count the number of pending tasks (i.e. tasks with isChecked property set to false)
  const pendingTasksCount = useTracker(() => 
    TasksCollection.find(hideCompletedFilter).count()
  );

  // Declare function to generate a text message indicating the number of pending tasks
  const pendingTasksTitle = `${`${pendingTasksCount}`}`;
  
  // Fetch tasks from collection
  const tasks = useTracker(() => 
    TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }).fetch()
  );

  // Return the fetched tasks from the collection, text, form, and buttons
  return (
    <div className='App'>
      <header>
        <div className='app-bar'>
          <div className='app-headr'>
            <h1>To do list </h1>
            <h6> You have {pendingTasksTitle} pending tasks </h6>            
            </div>
        </div>
      </header>

      <div className='main'>
      
      {/* Return TaskForm component */}
      <TaskForm />

      {/* Button for filtering tasks */}
      <div className='filter'>
        <button onClick={() => setHideCompleted(!hideCompleted)}>
          {hideCompleted ? 'Show all' : 'Show pending tasks'}
        </button>
      </div>

      <ul className='tasks'>
        {/* Iterate over the tasks constant to render the task text as a list */}
        {tasks.map(task => (
          <Task 
            key={task._id} 
            task={task} 
            onChecboxClick={toggleChecked} 
            onDeleteClick={deleteTask}
          />
        ))}
      </ul>
      </div>
    </div>
  );
};

