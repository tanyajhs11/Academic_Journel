import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";

function Sidebar({ toRender, setToRender }) {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              //id={window.location.pathname=val.link ? "active" : ""}
              onClick={() => {
                setToRender(val.title);
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
