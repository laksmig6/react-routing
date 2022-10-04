import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Userlist from "./pages/Userlist";

const Root = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/user"} element={<Userlist />} />
      </Routes>
    </>
  );
};

export default Root;
