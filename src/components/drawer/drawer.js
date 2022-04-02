import React from "react";
import "./drawer.css";

const Drawer = (props) => {
  let drawerClasses = "drawer";
  if (props.show) {
    drawerClasses = "drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <h1 style={{ color: "white", textAlign: "center" }}>React Assessment</h1>
      <ul>
        <li>
          <a href="/">Link</a>
        </li>
        <li>
          <a href="/">Link</a>
        </li>
        <li>
          <a href="/">Link</a>
        </li>
        <li>
          <a href="/">Link</a>
        </li>
      </ul>
    </nav>
  );
};

export default Drawer;
