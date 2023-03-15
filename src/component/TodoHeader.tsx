import React, { useEffect, useState } from "react";
import dotIcon from "../img/dot_icon.png";
function TodoHeader({
  changeBox,
  chosenBox,
  todoList,
  doneList,
  inboxList,
  setTodoList,
  setInboxList,
  setDoneList,
}) {
  const [openDropDown, setOpenDropDown] = useState(false);

  function clear() {
    if (chosenBox === "Inbox") {
      setTodoList(todoList.filter((p) => p.Done === true));
    } else {
      setTodoList(todoList.filter((p) => p.Done === false));
    }
  }

  return (
    <div id="todo-header">
      {chosenBox === "Inbox" ? (
        <button onClick={changeBox} className="styled-btn-black margin-left">
          {chosenBox} ({inboxList.length})
        </button>
      ) : null}
      {chosenBox === "Done" ? (
        <button onClick={changeBox} className="styled-btn-black margin-left">
          {chosenBox} ({doneList.length})
        </button>
      ) : null}
      <div>
        <img
          onClick={() => setOpenDropDown((prev) => !prev)}
          id="todo-dot-btn"
          src={dotIcon}
          alt=" "
        />
        {openDropDown ? (
          <div onClick={clear} className="drop-down-todo fadein">
            <span className="drop-down-todo-item no-shadow">Clear all</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default TodoHeader;
