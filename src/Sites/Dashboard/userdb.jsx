import React from 'react';
import './ed.css';

const UserDB = () => {
  // Replace this with actual user data
  const user = {
    name: 'John Doe',
    photo: 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
    date: new Date().toLocaleDateString(),
  };

  return (

    <div className="user-db">
      <img src={user.photo} alt="User" className="user-pic" />
      <br></br>
      <h2 className='usernamedb'>{user.name}</h2>
      <p className="user-date">Date: {user.date}</p>
    </div >
  );
};

export default UserDB;
