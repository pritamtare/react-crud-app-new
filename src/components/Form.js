import React from "react";
import "../styles.css";
const Form = ({ onChange, newUser, onSubmit }) => {
  return (
    <>
      <div className="form  p-3 my-4">
        <form className="row" onSubmit={onSubmit}>
          <div className="col-lg-4 d-flex flex-column my-2">
            <label>First Name</label>
            <input
              name="fname"
              value={newUser.fname}
              onChange={onChange}
              type="text"
              className="p-1"
            />
          </div>

          <div className="col-lg-4 d-flex flex-column my-2">
            <label>Last Name</label>
            <input
              name="lname"
              value={newUser.lname}
              onChange={onChange}
              type="text"
              className="p-1"
            />
          </div>

          <div className="col-lg-4 d-flex flex-column my-2">
            <label>Email</label>
            <input
              name="email"
              value={newUser.email}
              onChange={onChange}
              type="text"
              className="p-1"
            />
          </div>

          <div className="col-lg-4 d-flex flex-column my-2">
            <label>DOB</label>
            <input
              name="dob"
              value={newUser.dob}
              onChange={onChange}
              type="date"
              className="p-1"
            />
          </div>

          <div className="col-lg-4 d-flex flex-column my-2">
            <label>City</label>
            <input
              name="city"
              value={newUser.city}
              onChange={onChange}
              type="text"
              className="p-1"
            />
          </div>

          <div className="col-lg-4  d-flex align-self-end my-2">
            <button type="submit" className="btn btn-success">
              Submit User Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
