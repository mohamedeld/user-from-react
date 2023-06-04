import React, { useEffect, useState } from "react";
import UserDetail from "../components/userDetail";
import Button from "../components/Button";

const Home = () => {
  const [userData, setUserData] = useState({
    name: "mohamed",
    age: 23,
    collage: "computer science",
    skills: ["programming", "football", "web", "mobile", "cloud"],
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const changeName = () => {
    setUserData({
      ...userData,
      name: "ali",
    });
  };

  useEffect(() => {
    console.log("component did mount");
  }, []);
  useEffect(() => {
    console.log("did update");
  }, [userData]);

  return (
    <div className="container py-5">
      <h1>Some Information</h1>
      <UserDetail data={userData} />
      {isAdmin ? (
        <Button title="click" handleClick={() => changeName()} />
      ) : (
        "only admin change data"
      )}
      <hr />
    </div>
  );
};

export default Home;
