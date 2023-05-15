import React, { useState } from "react";
import "../styles/modal.css";
import { ContactCard } from "../cards/ContactCard";
import axios from "axios";

export const ContactModal = ({ setModal, getContacts }) => {
  const initialValues = {
    name: "",
    proffession: "",
    address: "",
    email: "",
    phone: "",
  };
  const [contact, setContact] = useState(initialValues);
  const [message, setMessage] = useState(null);

  const data = { message: "Contact added successfully" };

  const handleChange = (key, value) => {
    setContact({ ...contact, [key]: value });
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://645ce8d5250a246ae311e4d6.mockapi.io/contacts/users",
        contact
      )
      .then((response) => {
        setContact(response.data);
        setMessage(data.message);
        setTimeout(() => {
          setModal(false);
        }, 2000);
        getContacts();
      })
      .catch((response) => {
        setModal(false);
        setMessage(response.message);
      });
  };

  return (
    <div className="modal">
      {message && <p className="response-message">{message}</p>}
      <ContactCard background="#ffff" width="40%" height="80%">
        <h2>Let's add a contact</h2>
        <form>
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
            <button onClick={() => setModal(false)}>Cancel</button>
            <button onClick={handleAddContact}>Save</button>
          </div>
        </form>
      </ContactCard>
    </div>
  );
};
