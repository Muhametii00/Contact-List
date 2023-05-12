import React from "react";

export const ContactCard = ({
  children,
  width,
  height,
  radius = "10px",
  border = "1px solid lightgrey",
  bottom,
  background,
}) => {
  return (
    <div
      style={{
        backgroundColor: background,
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
