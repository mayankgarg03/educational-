import React from "react";
import { PauseButton } from "../Pausebutton/Pausebutton";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div class="Foot">
        <button
          class="b1"
          style={{ float: "right", marginRight: "45px", padding:"8px" }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Footer;
