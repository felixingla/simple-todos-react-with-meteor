import React, { useState } from 'react';
import { TasksCollection } from '/imports/api/TasksCollection';

// Define the TaskForm component
export const TaskForm = () => {
  // Declare a state variable called "text" and a function called "setText" for updating it
  // Initially, the "text" variable is set to an empty string
  const [text, setText] = useState('');

  // Define the handleSubmit event handler function
  const handleSubmit = e => {
    // Prevent the default refresh behavior of the form submission
    e.preventDefault();

    // If the "text" variable is empty, do nothing
    if (!text) return;

    // Insert a new task object into the TasksCollection with the trimmed value of "text" and the current date
    TasksCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
    });

    // Set the value of "text" back to an empty string
    setText('');
  };

  // Return the JSX for the TaskForm component
  return (
    
    <form className="task-form" onSubmit={handleSubmit}>
    
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button type="submit">+</button>
    </form>
  );
};
