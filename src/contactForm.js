import React,{useState} from "react";
import styles from"./contact.module.css";
import { useDispatch } from "react-redux";
import { createContact } from "./redux/slice/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function ContactForm() {
    const [newContact, setnewContact] = useState({
        name: "",
        email: "",
        password: "",
        /* nanoid generate the random id */
        id:nanoid(5)
    })
    /* use usedispatch to dispatch the actions*/
    const dispatch = useDispatch();
   
    
/* add function to the data to the list */
    function addContact(e) {
        e.preventDefault();
        if (newContact.name && newContact.email && newContact.password) {
            dispatch(createContact(newContact)
                //{
            //     name: newContact.name,
            //     email: newContact.email,
            //     password: newContact.password,
            //     id:newContact.id

            // }
            );
            alert("data is submit successfully")
            setnewContact({ name: "", email: "", password: "" ,id:""});
        } else {
            alert("Please enter the both detail");
        }

       
    }
  

    return (
        <div>
            <form>
                <input
                    type="name"
                    placeholder="name"
                    value={newContact.name}
                    onChange={(e) => setnewContact({ ...newContact, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="abc@gmail.com"
                    value={newContact.email}
                    onChange={(e) => setnewContact({ ...newContact, email: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    value={newContact.password}
                    onChange={(e) => setnewContact({ ...newContact, password: e.target.value })}
                    required
                />
                <button className={styles.button} type="submit" onClick={addContact}>
                    Submit
                </button>
            </form>
        </div>
    );
}
