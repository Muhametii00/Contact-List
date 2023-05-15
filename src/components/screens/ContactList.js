import React, { useEffect, useState } from "react";
import "../../styles/ContactList.css";
import { ContactCard } from "../../cards/ContactCard";
import Address from "../../assets/icons/Address.png";
import Email from "../../assets/icons/Email.png";
import Phone from "../../assets/icons/Phone.png";
import { ContactModal } from "../../modal/ContactModal";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";

export const ContactList = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      setLoading(true);
      setError(false);
      await axios
        .get("https://645ce8d5250a246ae311e4d6.mockapi.io/contacts/users")
        .then((res) => {
          setContacts(res.data);
        });
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="contact">
      <button
        className="add-contact"
        onClick={() => {
          setModal(true);
        }}
      >
        Add Contact
      </button>
      {modal && <ContactModal getContacts={getContacts} setModal={setModal} />}
      <div className="contact-card">
        {loading ? (
          <MutatingDots
            height="150"
            width="150"
            color="blue"
            secondaryColor="lightblue"
            radius="20"
          />
        ) : error ? (
          <h3>Sorry, we were unable to display data</h3>
        ) : (
          contacts.map((contact) => {
            return (
              <ContactCard
                key={contact.id}
                background="#f9f9f9"
                width="25%"
                bottom="3%"
              >
                <div className="contact-card-person">
                  <div>
                    <div>
                      <h1>{contact.name}</h1>
                      <h2>{contact.proffession}</h2>
                    </div>
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
          })
        )}
      </div>
    </div>
  );
};
