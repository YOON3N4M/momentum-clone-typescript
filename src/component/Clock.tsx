import "../css/Clock.css";
import React, { useEffect, useState } from "react";
import dotIcon from "../img/dot_icon.png";

function Clock({ componentHide }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(String(date.getHours()).padStart(2, "0"));
  const [minutes, setMinutes] = useState(
    String(date.getMinutes()).padStart(2, "0")
  );
  const [ampmHours, setAmpmHours] = useState(date.getHours());
  const [ampm, setAmpm] = useState("");
  const [optionOpen, setOptionOpen] = useState(false);
  const [chooseClock, setChooseClock] = useState(true); // true=24시간제, false=오전오후제
  const [dotVisible, setDotVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setDate((prev) => new Date());
    }, 1000);
    if (date.getHours() > 12 && date.getHours() < 24) {
      setAmpmHours((prev) => date.getHours() - 12);
      setAmpm((prev) => "PM");
    } else {
      setAmpm((prev) => "AM");
    }
  }, []);

  useEffect(() => {
    setHours(String(date.getHours()).padStart(2, "0"));
    setMinutes(String(date.getMinutes()).padStart(2, "0"));
    if (date.getHours() > 12 && date.getHours() < 24) {
      setAmpmHours(date.getHours() - 12);
    }
  }, [date]);

  console.log(ampmHours);
  return (
    <div
      onMouseOver={() => setDotVisible(true)}
      onMouseOut={() => setDotVisible(false)}
      id="clock-box"
    >
      {chooseClock ? (
        <span
          id="clock"
          className={
            "fadein" + (componentHide.showClock === true ? "" : " invisible")
          }
        >
          {hours}:{minutes}
        </span>
      ) : (
        <span
          id="clock"
          className={
            "fadein" + (componentHide.showClock === true ? "" : " invisible")
          }
        >
          {ampmHours}:{minutes}
        </span>
      )}
      <div
        id="clock-option-box"
        className={componentHide.showClock === true ? "" : "invisible"}
      >
        {optionOpen ? (
          <div className="drop-down fadein">
            <span id="clock-option-span" className="no-shadow">
              24-hour clock
            </span>
            <div id="toggle-switch-box">
              <label className="switch-smaller">
                <input type="checkbox" checked={chooseClock} />
                <span
                  onClick={() => setChooseClock((prev) => !prev)}
                  className="slider-smaller round"
                ></span>
              </label>
            </div>
          </div>
        ) : null}
        <img
          onClick={() => setOptionOpen((prev) => !prev)}
          id="clock-option-img"
          className={dotVisible ? "opacity-hundred img-shadow" : "opacity-zero"}
          src={dotIcon}
          alt=" "
        />
      </div>
    </div>
  );
}

export default Clock;
