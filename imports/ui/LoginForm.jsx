import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';


// Login form react component
export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    // Authenticate user with the provided inputs
    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={submit} className="login-form">
      <label htmlFor="username">Username</label>

    <div>
      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => setUsername(e.target.value)}
      />
    </div>
    
      <label htmlFor="password">Password</label>

    <div>
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />
    </div>
    
      <button type="submit">Log In</button>
    </form>
  );
};