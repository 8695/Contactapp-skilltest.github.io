//import ContactList from './contactList';
import ContactForm from "./contactForm";
import "./App.css";
import ContactList from "./contactList";
import { useState } from "react";
import FetchApiData from "./ApiData/Api";

function App() {
  const [show, setShow] = useState(false);
  
  function showComponent() {
    setShow(!show);
  }
  function hideComponent() {
    setShow(false);
  }

  return (
    <>
      <div className="App">
        <h1>Contact App List</h1>
        <button className="addbutton" onClick={showComponent}>
          Add Contact
        </button>
        {show && <ContactForm />}
        {show && 
          <button className="hidebtn" onClick={hideComponent}>
            X
          </button>
        }
      </div>
      <div>
        <ContactList show={show} setShow={setShow}/>
        <FetchApiData />
      </div>
    </>
  );
}

export default App;
