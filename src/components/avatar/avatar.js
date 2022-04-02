import React from "react";

import "./avatar.css";

const Avatar = (props) => (
  <>
    <img
      src="https://img.icons8.com/material-two-tone/96/ffffff/person-male.png" style={{margin: "0.5rem 1rem",transform: "scale(1.5)"}}
      alt="avatar"
      className="toggle-button"
      onClick={props.click}
    />
  </>
);

export default Avatar;
