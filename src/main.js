import React, { useState } from "react";

import Form from "./components/Form";
import Table from "./components/Table";
import Modal from "./components/Modal";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [newUser, setNewUser] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    city: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({
    index: ""
  });

  const handleUserChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
      id: Math.random()
    });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, newUser]);
    setShowForm(false);

    setNewUser({
      id: "",
      fname: "",
      lname: "",
      email: "",
      city: ""
    });
  };
  const handleShowModal = (e, i) => {
    setUser(i);
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  let tableData = userData?.map((e, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{e.fname}</td>
        <td>{e.lname}</td>
        <td>{e.email}</td>

        <td>
          <button
            onClick={() => handleShowModal(e, i)}
            className="btn btn-primary mx-2"
          >
            View
          </button>
          <button
            className="mx-2 btn btn-danger"
            onClick={() => handleDeleteUser(e, i)}
          >
            Delete
          </button>
          <button className="mx-2 btn btn-warning">Update</button>
        </td>
      </tr>
    );
  });

  if (userData.length === 0) {
    tableData = (
      <tr>
        <td className="text-center text-secondary py-3">No Reacords Found</td>
      </tr>
    );
  }

  const handleDeleteUser = (e, i) => {
    let updatedUserData = userData?.filter((val, ind) => ind !== i);
    setUserData(updatedUserData);
    setShowModal(false);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button className=" btn btn-primary my-4" onClick={handleShowForm}>
        Add New User
      </button>
      {showForm && (
        <Form
          onSubmit={handleUserSubmit}
          onChange={handleUserChange}
          newUser={newUser}
        />
      )}
      <Table tableData={tableData} />
      {showModal && (
        <Modal closeModal={handleCloseModal} userData={userData} user={user} />
      )}
    </>
  );
};

export default Main;
