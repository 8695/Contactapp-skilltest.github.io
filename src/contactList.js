import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./list.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "./redux/slice/contactSlice";

export default function ContactList() {
  const list = useSelector((state) => state.contactSlice.data);
  const dispatch = useDispatch();

  /* delete function to delete the item */
  const deleteItem = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.list}>
      {list.map((data) => (
        <div key={data.id} className={styles.data}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faUser}
            style={{ color: "white" }}
          />
          <ul>
            <li>name:{data.name}</li>
            <li>email:{data.email}</li>
            <li>password:{data.password}</li>
          </ul>
          <button
            className={styles.deletebtn}
            onClick={() => deleteItem(data.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
