import "../css/Greeting.css";

import { useState, useEffect } from "react";

function Greeting({ savedUsername, componentHide }) {
  const [sayHi, setSayHi] = useState("");
  const date = new Date();
  const hours = date.getHours();

  useEffect(() => {
    if (hours < 12 && hours > 6) {
      //7 8 9 10 11
      setSayHi("Good morning, ");
    } else if (hours < 18) {
      //12 13 14 15 16 17
      setSayHi("Good afternoon, ");
    } else if (hours > 17 && hours < 22) {
      setSayHi("Good evening, ");
    } //18 19 20 21
    else if (hours > 21) {
      //22 23 24
      setSayHi("Good night, ");
    } else {
      setSayHi("it's quiet dawn, ");
    }
  }, []);

  return (
    <div>
      <span
        className={
          "greeting" +
          " fadein" +
          (componentHide.showGreeting === true ? "" : " invisible")
        }
      >
        {sayHi} {savedUsername}
      </span>
    </div>
  );
}

export default Greeting;
