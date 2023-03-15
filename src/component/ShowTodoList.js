import dotIcon from "../img/dot_icon.png";
import React, { useState, useEffect } from "react";
function ShowTodoList({
  todoList,
  chooseBox,
  doneList,
  inboxList,
  setTodoList,
  setInboxList,
  setDoneList,
  TODO_KEY,
}) {
  function stateChange(item) {
    if (item.Done === false) {
      item.Done = true;
    } else if (item.Done !== false) {
      item.Done = false;
    }
    setInboxList(todoList.filter((p) => p.Done === false));
    setDoneList(todoList.filter((p) => p.Done === true));
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
    // setTodoList((prev) => prev.filter((todo) => todo.id !== item.id));
  }
  function deleteTodo(item) {
    setTodoList((prev) => prev.filter((todo) => todo.id !== item.id));
  }
  const [dotVisible, setDotVisible] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div id="todo-list" className="styled-scroll">
      <ul>
        {todoList.length === 0 ? null : null}

        {inboxList.length === 0 && chooseBox === true ? (
          <div id="if-no-todo">
            <span>no todo here</span>
          </div>
        ) : null}

        {inboxList.length !== 0 && chooseBox === true
          ? inboxList.map((item, index) => (
              <li key={item.id} className="margin-left fadeup" id="todo-item">
                <div
                  onMouseOver={() => setDotVisible(true)}
                  onMouseOut={() => setDotVisible(false)}
                  className="todo-item-box"
                >
                  <label>
                    <input
                      key={item.id}
                      id="todo-checkbox"
                      type="checkbox"
                      onClick={() => stateChange(item)}
                    ></input>
                  </label>
                  <div className="todo-item-span-box">
                    <span key={item.id}>{item.value}</span>
                  </div>

                  <span
                    className={
                      "todo-del-btn" + (dotVisible ? "" : " opacity-zero")
                    }
                    alt=""
                    onClick={() => deleteTodo(item)}
                  >
                    x
                  </span>
                </div>
              </li>
            ))
          : null}

        {doneList.length === 0 && chooseBox === false ? (
          <div id="if-no-todo">
            <span>no todo here</span>
          </div>
        ) : null}

        {doneList.length !== 0 && chooseBox === false
          ? doneList.map((item, index) => (
              <li key={item.id} className="margin-left fadeup" id="todo-item">
                <div
                  onMouseOver={() => setDotVisible(true)}
                  onMouseOut={() => setDotVisible(false)}
                  className="todo-item-box"
                >
                  <label>
                    <input
                      key={item.id}
                      id="todo-checkbox"
                      type="checkbox"
                      onClick={() => stateChange(item)}
                      checked
                    ></input>
                  </label>
                  <div className="todo-item-span-box">
                    <span className="done" key={item.id}>
                      {item.value}
                    </span>
                  </div>

                  <span
                    className={
                      "todo-del-btn" + (dotVisible ? "" : " opacity-zero")
                    }
                    alt=""
                    onClick={() => deleteTodo(item)}
                  >
                    x
                  </span>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
export default ShowTodoList;
