import React from "react";
import { ContactCard } from "../cards/ContactCard";
import { Failed } from "../assets/icons/Failed";

export const FailedModal = () => {
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
          <Failed />
          <p style={{ color: "darkgreen" }}>Unable to add contact!</p>
        </div>
      </ContactCard>
    </div>
  );
};
