import React from "react";
import { ContactCard } from "../cards/ContactCard";
import { Success } from "../assets/icons/Success";

export const SuccessModal = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        position: "fixed",
        overflow: "hidden",
        top: "0",
        right: "0",
        left: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        zIndex: "999",
      }}
    >
      <ContactCard background="#ffff" width="40%" height="17%">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2%",
            padding: "5%",
          }}
        >
          <Success />
          <p style={{ color: "darkgreen" }}>Contact added successfully!</p>
        </div>
      </ContactCard>
    </div>
  );
};
