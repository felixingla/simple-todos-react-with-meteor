import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import { TaskForm } from './TaskForm';

/*Displays a list of tasks fetched from a Meteor collection called TasksCollection*/
export const App = () => {
  /*Fetch tasks from collection*/
  const tasks = useTracker(() => 
    TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  /*Return the fetched tasks from the collection*/
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      
      <TaskForm />

      <ul>
        {/* Iterate over the tasks constant to render the task text as a list */}
        {tasks.map(task => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};

