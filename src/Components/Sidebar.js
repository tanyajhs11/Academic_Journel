import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Sidebar({ toRender, setToRender }) {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        // You can add additional logic here, such as redirecting to a login page.
      })
      .catch((error) => {
        console.error('Sign-out error', error);
      });
  };

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (
          <li
            key={key}
            className="row"
            onClick={() => {
              if (val.title === 'Sign Out') {
                handleSignOut();
              } else {
                setToRender(val.title);
              }
            }}
          >
            <div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
