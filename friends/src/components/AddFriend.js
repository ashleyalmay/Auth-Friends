import React, { useState} from 'react';
import {axiosWithAuth} from '../Utils/axiosWithAuth';


const AddFriend = props => {
  console.log(props, 'props');
 
  const [friend, setFriend] = useState({});
  const [friends, setFriends] = useState([]);

  const handleChanges = e => {
    
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };


  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', friend)
      .then(res => {
        console.log(res.data, 'post response');
        props.getData();
        setFriend({ name: '', age: '', email: '' });
       
      })
      .catch(err => console.log(err));
  
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <div className='newFriendDiv'>
        <h1>Add New Friend</h1>
        <label id='name'>Name:</label>
        <input
          name='name'
          value={friends.name}
          label='name'
          id='name'
          type='text'
          placeholder='Name'
          onChange={handleChanges}
        />
        <label id='age'>Age: </label>
        <input
          name='age'
          value={friends.age}
          label='age'
          id='age'
          type='text'
          placeholder='Age'
          onChange={handleChanges}
        />
        <label id='email'>Email: </label>
        <input
          name='email'
          value={friends.email}
          label='email'
          id='email'
          type="email"
          placeholder='Email'
          onChange={handleChanges}
        />
        <button type='submit'>Add Friend</button>
      </div>
    </form>
  );

};

export default AddFriend;