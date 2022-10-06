import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const UsersContainer = () => {
  const [searchParam, setSearchParam] = useSearchParams({ n: 3 });
  const number = searchParam.get("n");

  return (
    <>
      <Link to="/users/1">User 1</Link>
      <br />
      <Link to="/users/2">User 2</Link>
      <br />
      <Link to={`/users/${number}`}>User {number}</Link>
      <br />
      <Link to="/users/new">New User</Link>
      <br />
      <Outlet context={{ Hello: "world" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setSearchParam({ n: e.target.value });
        }}
      />
    </>
  );
};

export default UsersContainer;
