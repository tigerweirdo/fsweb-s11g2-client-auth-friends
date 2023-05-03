import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [refreshList, setRefreshList] = useState(false);

  useEffect(() => {
    const fetchFriends = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:9000/api/friends', {
        headers: {
          'Authorization': token,
        },
      });
      setFriends(response.data);
    };

    fetchFriends();
  }, [refreshList]);

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            {friend.name} ({friend.age}) - {friend.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
