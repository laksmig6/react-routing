import React from "react";
import { Link } from "react-router-dom";

const Userlist = () => {
  return (
    <div>
      <h2>User List Component</h2>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <br />
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <br />
        <li>
          <Link to="/users/New">New User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Userlist;
