import React from "react";
import { useNavigate } from "react-router-dom";
export const UserList = (props) => {
  const navigate = useNavigate();
  return (
    <>
      UserList
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
};
