// Code to set up user accounts
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/api/TasksCollection';

/*It then defines a function called insertTask that takes 
a task text as an argument and inserts a new document 
into the TasksCollection collection with the text 
as the value of the text field. */
const insertTask = taskText => TasksCollection.insert({ text: taskText});

// Create seed username and password
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  // checks if TasksCollection is empty using find().count(). If empty, it inserts a document for each string in an array using insertTask.*/

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