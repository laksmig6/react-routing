import React from "react";
import { Link, Outlet } from "react-router-dom";

const UsersContainer = () => {
  return (
    <>
      <Link to="/users/1">User 1</Link>
      <br />
      <Link to="/users/2">User 2</Link>
      <br />
      <Link to="/users/new">New User</Link>
      <br />
      <Outlet context={{ Hello: "world" }} />
    </>
  );
};

export default UsersContainer;
