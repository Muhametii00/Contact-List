import React, { useState } from "react";
import "../styles/modal.css";
import { ContactCard } from "../cards/ContactCard";
import axios from "axios";

export const ContactModal = ({ Submit }) => {
  const initialValues = {
    name: "",
    proffession: "",
    address: "",
    email: "",
    phone: "",
  };
  const [contact, setContact] = useState(initialValues);

  const handleChange = (key, value) => {
    setContact({ ...contact, [key]: value });
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    axios
      .post("https://645ce8d5250a246ae311e4d6.mockapi.io/contacts/users", {
        initialValues,
      })
      .then((res) => {
        setContact(res.data);
      });
  };
  return (
    <div className="modal">
      <ContactCard background="#ffff" width="40%" height="80%">
        <h2>Let's add a contact</h2>
        <form onSubmit={handleAddContact}>
          <input
            value={contact.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter you full name"
          />
          <input
            value={contact.proffession}
            onChange={(e) => handleChange("proffession", e.target.value)}
            placeholder="Enter you proffession"
          />
          <input
            value={contact.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Enter you location"
          />
          <input
            value={contact.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter you email"
          />
          <input
            value={contact.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter you phone number"
          />
          <div className="buttons">
            <button onClick={Submit}>Cancel</button>
            <button>Add Contact</button>
          </div>
        </form>
      </ContactCard>
    </div>
  );
};
