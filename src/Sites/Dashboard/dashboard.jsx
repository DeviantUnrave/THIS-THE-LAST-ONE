import React, { useState } from 'react';
import LogButton from './logbutton';
import UserDB from './userdb';
import './ed.css';

const Dashboard = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const exitClick = () => {
    window.location.href = "/Login"
  };


  return (
    <>
      <div className="dbheader">
        <h1 className='meow'>Employee Dashboard</h1>
        <div className="user-image-dropdown">
          <img
            src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            alt="User"
            className="user-image"
            onClick={exitClick}
          />
          {isDropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-content">
                <a href="#">Logout</a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="dashboard">
        <UserDB />
        <div className="log-db">
          <LogButton />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
