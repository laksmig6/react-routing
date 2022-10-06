import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const outletObj = useOutletContext();
  return (
    <div>
      <h2>
        User: {id} {outletObj.hello}
      </h2>
    </div>
  );
};

export default User;
