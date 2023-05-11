import React from "react";

export const ContactCard = ({
  children,
  width,
  height,
  radius = "10px",
  border = "1px solid lightgrey",
  bottom,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        width: width,
        height: height,
        borderRadius: radius,
        border: border,
        marginBottom: bottom,
      }}
    >
      {children}
    </div>
  );
};
