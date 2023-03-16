import React, { useState, useEffect } from "react";
import "../css/Todo.css";
import { SettingObj } from "../interfaces/userInterfaces";
import ShowTodoList from "./ShowTodoList.tsx";
import TodoHeader from "./TodoHeader.tsx";

interface NTodo {
  id: number;
  value: string;
  Done: boolean;
}

export type TodoListT = NTodo[] | any;

interface Props {
  componentHide: SettingObj;
}

function Todo({ componentHide }: Props) {
  const [todoShow, setTodoShow] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<TodoListT>([]);
  const [inboxList, setInboxList] = useState<TodoListT>([]);
  const [doneList, setDoneList] = useState<TodoListT>([]);
  const [chooseBox, setChooseBox] = useState(true);
  const [chosenBox, setChosenBox] = useState("Inbox");

  const TODO_KEY = "todo";

  function todoShowBtn() {
    //투두 팝업창을 띄우는 함수
    if (todoShow === false) {
      setTodoShow(true);
    } else {
      setTodoShow(false);
    }
  }
  useEffect(() => {
    const localTodo = localStorage.getItem(TODO_KEY);

    if (localTodo !== null) {
      const getTodo = JSON.parse(localTodo);
      setTodoList(getTodo);
      setInboxList(todoList.filter((p) => p.Done !== true));
      setDoneList(getTodo.filter((p) => p.Done === true));
    }
  }, []);

  useEffect(() => {
    setInboxList(todoList.filter((p) => p.Done !== true));
    setDoneList(todoList.filter((p) => p.Done === true));
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  }, [todoList]); //이 부분을 clear All 로 활용 할 수 있을듯 아마

  function onChange(event) {
    setTodo(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo !== "" && chosenBox === "Inbox") {
      const newTodo: NTodo = {
        id: Date.now(),
        value: todo,
        Done: false,
      };
      setTodoList((currentArray) => [...currentArray, newTodo]);
      setTodo("");
    } else {
      const newTodo = {
        id: Date.now(),
        value: todo,
        Done: true,
      };
      setTodoList((currentArray) => [...currentArray, newTodo]);
      setTodo("");
    }
  };

  function changeBox() {
    setChooseBox((prev) => !prev);
    if (chosenBox === "Inbox") {
      setChosenBox((prev) => "Done");
    } else {
      setChosenBox((prev) => "Inbox");
    }
  }

  return (
    <div>
      {todoShow ? (
        <div id="todoBox" className="fadeup">
          <TodoHeader
            changeBox={changeBox}
            chosenBox={chosenBox}
            todoList={todoList}
            doneList={doneList}
            inboxList={inboxList}
            setTodoList={setTodoList}
            setInboxList={setInboxList}
            setDoneList={setDoneList}
          />

          <ShowTodoList
            todoList={todoList}
            doneList={doneList}
            chooseBox={chooseBox}
            inboxList={inboxList}
            setTodoList={setTodoList}
            setInboxList={setInboxList}
            setDoneList={setDoneList}
            TODO_KEY={TODO_KEY}
          />
          <div id="todo-input-box">
            <form className="margin-left" onSubmit={onSubmit}>
              <input
                type="text"
                value={todo}
                onChange={onChange}
                id="todo-input"
                placeholder="New Todo"
              ></input>
            </form>
          </div>
        </div>
      ) : null}

      <button
        className={
          "styled-btn" +
          " fadein" +
          (componentHide.showTodo === true ? "" : " invisible")
        }
        onClick={todoShowBtn}
      >
        Todo
      </button>
      {componentHide.showTodo === false ? <div className="blank"></div> : null}
    </div>
  );
}

export default Todo;
