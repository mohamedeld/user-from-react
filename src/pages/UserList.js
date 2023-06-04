import React from "react";
import { useHistory } from "react-router-dom";
export const UserList = (props) => {
  const history = useHistory();
  return (
    <>
      UserList
      <button onClick={() => history.push("/")}>Home</button>
    </>
  );
};
