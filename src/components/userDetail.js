import React from "react";
function UserDetail(props) {
  //   const { name, age, collage } = props.data;
  return (
    <React.Fragment>
      <p>Name : {props.data.name}</p>
      <p>Age : {props.data.age}</p>
      <p>Eduction : {props.data.collage}</p>
      <ul>
        {props.data.skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </React.Fragment>
  );
}

export default UserDetail;
