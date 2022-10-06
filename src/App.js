import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Userlist from "./pages/Userlist";
import User from "./pages/User";
import Newuser from "./pages/Newuser";
import NotFound from "./pages/NotFound";
import UsersContainer from "./pages/UsersContainer";
import "./styles.css";

const Root = () => {
  const loc = useLocation();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
      </div>
      {loc.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersContainer />}>
          <Route index element={<Userlist />} />
          <Route path=":id" element={<User />} />
          <Route path="new" element={<Newuser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;
