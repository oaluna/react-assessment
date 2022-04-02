import React from 'react'
import Avatar from "../avatar/avatar"
import "./toolbar.css"

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <Avatar click={props.drawerClickHandler} />
        </div>
        <div className="spacer" style={{ flex: 1 }}>
          <h1>React Assessment</h1>
        </div>
        <div className="toolbar__navigation-items">
          <ul>
            <a href="/">
              <li>Link</li>
            </a>
            <a href="/">
              <li>Link</li>
            </a>
            <a href="/">
              <li>Link</li>
            </a>
            <a href="/">
              <li>Link</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Toolbar