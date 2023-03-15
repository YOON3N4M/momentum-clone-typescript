import React, { useEffect, useState } from "react";

import "./css/App.css";
import Todo from "./component/Todo.tsx";
import Weather from "./component/Weather.tsx";
import Background from "./component/Background.tsx";
import Search from "./component/Search";
import Setting from "./component/Setting.tsx";
import Greeting from "./component/Greeting";
import Clock from "./component/Clock";
import Login from "./component/Login";
import Quotes from "./component/Quotes";

function App() {
  const [img, setImg] = useState([]); // Background.js에서 API로 받아오는 이미지
  const [imgNum, setImgNum] = useState(Math.floor(Math.random() * 20));
  const [isLogin, setIsLogin] = useState(false);
  const [savedUsername, setSavedUsername] = useState("");
  const [isImgLoading, setIsimgLoading] = useState(false);
  const [coverHide, setCoverHide] = useState(false);
  const [componentHide, setComponentHide] = useState({
    showSearch: true,
    showWeather: true,
    showClock: true,
    showGreeting: true,
    showTodo: true,
    showQuotes: true,
  });

  const [quotes, setQuotes] = useState([]);
  const [quotesNum, setQuotesNum] = useState(Math.floor(Math.random() * 10)); //10은 명언 개수

  useEffect(() => {
    const localSavedUsername = localStorage.getItem("user");
    setSavedUsername((prev) => localSavedUsername);

    if (localSavedUsername == null) {
      setIsLogin(false); // 로컬스토리지에 user가 null이 아니면 isLogin = true
    } else if (localSavedUsername !== null) {
      setIsLogin(true); // 로컬스토리지에 user가 null이면 isLogin = false
    }
  }, []);

  return (
    <div className="apps">
      {isLogin ? null : (
        <Login setSavedUsername={setSavedUsername} setIsLogin={setIsLogin} />
      )}
      <div
        id="app-cover"
        className={
          "apps" +
          (isImgLoading ? " fadeout" : "") +
          (coverHide ? " invisible" : "")
        }
      ></div>
      <div id="background-box">
        <Background
          img={img}
          setImg={setImg}
          imgNum={imgNum}
          setImgNum={setImgNum}
          setIsimgLoading={setIsimgLoading}
          setCoverHide={setCoverHide}
        />
      </div>
      <div
        className={
          "apps" + " apps-wrap" + (isLogin ? " visible" : " invisible")
        }
      >
        <div className="top-bar"></div>
        <div className="top-row">
          <div className="top-left">
            <Search componentHide={componentHide} />
          </div>
          <div className="top-center"></div>

          <div className="top-right">
            <Weather componentHide={componentHide} />
          </div>
        </div>
        <div className="center-above"></div>
        <div className="center">
          <Clock componentHide={componentHide} />
          <Greeting
            savedUsername={savedUsername}
            componentHide={componentHide}
          />
        </div>
        <div className="center-below"></div>
        <div className="bottom-row">
          <div className="bottom-left">
            <Setting
              img={img}
              setImgNum={setImgNum}
              setIsimgLoading={setIsimgLoading}
              setCoverHide={setCoverHide}
              quotes={quotes}
              quotesNum={quotesNum}
              setQuotesNum={setQuotesNum}
              componentHide={componentHide}
              setComponentHide={setComponentHide}
              setIsLogin={setIsLogin}
            />
          </div>
          <div className="bottom-center">
            <Quotes
              quotes={quotes}
              setQuotes={setQuotes}
              quotesNum={quotesNum}
              setQuotesNum={setQuotesNum}
              componentHide={componentHide}
            />
          </div>
          <div className="bottom-right">
            <div className="todo-wrap">
              <Todo componentHide={componentHide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
