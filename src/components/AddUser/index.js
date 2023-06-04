import React, { useState } from "react";

export const AddUserForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    position: "",
  });
  const [errors, setErrors] = useState({
    firstNameErr: "",
    lastNameErr: "",
    positionErr: "",
  });

  const changeData = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
    validationError(e.target.id, e.target.value);
  };

  const validationError = (field, value) => {
    if (field === "firstName") {
      setErrors({
        ...errors,
        firstNameErr:
          value.length === 0
            ? "please enter first name "
            : value.length <= 3
            ? "first name should be greater than 3"
            : null,
      });
    } else if (field === "lastName") {
      setErrors({
        ...errors,
        lastNameErr:
          value.length === 0
            ? "please enter your last name"
            : value.length <= 3
            ? "last name length should be greater than 3"
            : null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2>AddUser</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.firstNameErr ? "border-danger" : ""
            }`}
            id="firstName"
            aria-describedby="firstNameHelp"
            value={userInfo.firstName}
            onChange={changeData}
          />
          <div id="firstNameHelp" className="form-text text-danger">
            {errors.firstNameErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="lastNameHelp"
            value={userInfo.lastName}
            onChange={changeData}
          />
          <div id="lastNameHelp" className="form-text text-danger">
            {errors.lastNameErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position
          </label>
          <select
            className="form-select"
            id="position"
            aria-label="Default select example"
            value={userInfo.position}
            onChange={changeData}
          >
            <option disabled selected>
              Open this select menu
            </option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="Deveops">Deveops</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
