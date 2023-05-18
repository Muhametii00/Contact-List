import React from "react";
import "../../styles/About.css";
import AboutPhoto from "../../assets/icons/AboutPhoto.png";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>Welcome to our Contact Lists Application!</h1>
        <p>
          We understand the importance of keeping your contacts organized and
          easily accessible. Our application is designed to simplify the way you
          manage your contacts, ensuring you never lose touch with the people
          who matter most to you.
        </p>
        <p>
          With our Contact Lists Application, you can effortlessly store,
          categorize, and retrieve all your contacts in one centralized
          location. Whether you're a busy professional, a social butterfly, or
          simply someone who values staying connected, our application provides
          the perfect solution for streamlining your contact management process.
        </p>
        <h2>Key Features:</h2>
        <ol>
          <li>
            <strong>Intuitive Contact Storage:</strong> Our user-friendly
            interface allows you to add, edit, and delete contacts with ease.
            Simply input the necessary details, such as names, phone numbers,
            email addresses, and additional notes, and our application will
            handle the rest.
          </li>
          <li>
            <strong>Efficient Categorization:</strong> Stay organized by
            creating custom contact lists based on your specific needs. Whether
            you want to separate personal and professional contacts, group
            contacts by interests or projects, or categorize them any other way
            you prefer, our application offers flexible categorization options
            to suit your requirements.
          </li>
          <li>
            <strong>Quick Search and Filtering:</strong> Our powerful search and
            filtering capabilities enable you to find the contacts you need in
            seconds. No more scrolling endlessly through long lists or
            struggling to recall a specific name. Just enter a keyword or apply
            filters, and our application will swiftly retrieve the relevant
            contacts.
          </li>
          <li>
            <strong>Seamless Integration:</strong> Our Contact Lists Application
            seamlessly integrates with your existing devices and platforms.
            Whether you prefer accessing your contacts on your desktop, laptop,
            or other devices, our application ensures that your contacts are
            synchronized across all your devices, keeping you connected wherever
            you go.
          </li>
          <li>
            <strong>Enhanced Communication:</strong> With our application,
            communication becomes a breeze. You can initiate calls, send
            messages, or compose emails directly from the app, eliminating the
            need to switch between multiple applications. Stay connected with
            your contacts effortlessly and never miss an important conversation.
          </li>
          <li>
            <strong>Data Security:</strong> We understand that your contact
            information is sensitive and deserves utmost protection. Our
            application prioritizes data security, implementing robust
            encryption measures to safeguard your valuable contacts from
            unauthorized access.
          </li>
        </ol>
        <p>
          At this Contact List, our goal is to provide you with a seamless,
          efficient, and reliable solution for managing your contact lists. We
          are dedicated to continually improving our application to meet your
          evolving needs, so you can focus on building and nurturing your
          connections.
        </p>
        <p>
          Experience the convenience and power of our Contact Lists Application
          today. Download it and take control of your contacts like never
          before. Stay connected effortlessly, anytime, anywhere.
        </p>
      </div>
      <div className="about-photo">
        <img src={AboutPhoto} alt="AboutPhoto" />
      </div>
    </div>
  );
};
