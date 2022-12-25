/*This code imports the Meteor object from the meteor/meteor package, 
and the TasksCollection object from the /imports/api/TasksCollection module. */
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/api/TasksCollection';

/*It then defines a function called insertTask that takes 
a task text as an argument and inserts a new document 
into the TasksCollection collection with the text 
as the value of the text field. */
const insertTask = taskText => TasksCollection.insert({ text: taskText});

/*
Meteor.startup checks if TasksCollection is empty using find().count(). 
If empty, it inserts a document for each string in an array using insertTask.*/
Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
});