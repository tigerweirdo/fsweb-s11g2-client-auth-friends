import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddFriend = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:9000/api/friends', formData, {
        headers: {
          'Authorization': token,
        },
      });

      // Redirect to friends list
      history.push('/friends');
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default AddFriend;
