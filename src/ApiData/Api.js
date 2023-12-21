import React, { useEffect, useState } from 'react';
import styles from './apiData.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function ApiData() {
    /* take data as a object inside the object take three variable for state pending fullfilled and rejected"*/

    const [data, setData] = useState({
        user: [],
        isLoading: false,
        error: null,
    });
   
   
/* useEffect to Fetch data through api */
useEffect(() => {
    const fetchData = async () => {
        try {
            setData((prevData) => ({ ...prevData, isLoading: true })); // Use functional update
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await response.json();
            setData({ user: result, isLoading: false, error: null });
        } catch (error) {
            setData((prevData) => ({ ...prevData, error: error.message, isLoading: false })); // Use functional update
        }
    };

    fetchData();
},[setData]); 


    /* function for delete the item */
    const deleteItem=(id)=>{
        const updatedData = data.user.filter((item)=> item.id !==id)
        /* update the data*/
        setData({ ...data, user: updatedData });
        alert('Deleted successfully');

    }
    
    return (
        <div>
        {data.user && (
            <div className={styles.list}>
                    {data.user.map((userData) => (
                        <div key={userData.id} className={styles.data}>
                            <FontAwesomeIcon className={styles.icon} icon={faUser} style={{ color: "white" }} />
                            <ul>
                                <li>name: {userData.name}</li>
                                <li>email: {userData.email}</li>
                                <li>password:{userData.address.city}</li>
                            </ul>
                           
                            <button className={styles.deletebtn} onClick={() => deleteItem(userData.id)}>
                                Delete
                            </button>
                            
                        </div>
                    ))}
                </div>
                )}
                
        </div>
    );
}
