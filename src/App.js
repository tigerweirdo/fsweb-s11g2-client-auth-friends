import React from 'react';
import './App.css';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated && (
          <nav>
             <NavLink to="/logout">Logout</NavLink>
        <NavLink to="/friends">Friends List</NavLink>
        <NavLink to="/friends/add">Add Friend</NavLink>
      </nav>
    )}
    <Route exact path={['/', '/login']} component={Login} />
    <ProtectedRoute exact path="/friends" component={FriendsList} />
    <ProtectedRoute exact path="/friends/add" component={AddFriend} />
    <Route exact path="/logout" component={Logout} />
  </div>
</BrowserRouter>
  );
}

export default App;