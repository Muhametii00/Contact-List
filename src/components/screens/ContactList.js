import React, { useEffect, useState } from "react";
import "../../styles/ContactList.css";
import { ContactCard } from "../../cards/ContactCard";
import Address from "../../assets/icons/Address.png";
import Email from "../../assets/icons/Email.png";
import Phone from "../../assets/icons/Phone.png";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://645ce8d5250a246ae311e4d6.mockapi.io/contacts/users")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((err) => {});
  }, []);
  return (
    <div className="contact">
      <button className="add-contact">Add Contact</button>
      <div className="contact-card">
        {contacts.map((contact) => {
          return (
            <ContactCard width="25%" bottom="3%">
              <div className="contact-card-person">
                <div>
                  <h1>{contact.name}</h1>
                  <h2>{contact.proffession}</h2>
                </div>
                <div>
                  <span>
                    <img width="23" src={Address} alt="Address" />
                    <p>{contact.address}</p>
                  </span>
                  <span>
                    <img width="20" src={Email} alt="Email" />
                    <p>{contact.email}</p>
                  </span>
                  <span>
                    <img width="20" src={Phone} alt="Phone" />
                    <p>{contact.phone}</p>
                  </span>
                </div>
              </div>
            </ContactCard>
          );
        })}
      </div>
    </div>
  );
};
