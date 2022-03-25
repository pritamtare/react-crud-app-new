import "../styles.css";

const Modal = ({ closeModal, user, userData }) => {
  return (
    <>
      <div className="modals">
        <div>
          <p>Sr. No: {user + 1}</p>
          <p>First Name : {userData[user]?.fname}</p>
          <p>Last Name : {userData[user]?.lname}</p>
          <p>Email : {userData[user]?.email}</p>
          <p>DOB : {userData[user]?.dob}</p>
          <p>City : {userData[user]?.city}</p>
        </div>

        <button className="btn btn-outline-primary" onClick={closeModal}>
          Colse
        </button>
      </div>
    </>
  );
};

export default Modal;
