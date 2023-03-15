import { useEffect, useState } from "react";

function SettingContents({
  activedNav,
  img,
  setImgNum,
  setIsimgLoading,
  setCoverHide,
  quotes,
  quotesNum,
  setQuotesNum,
  componentHide,
  setComponentHide,
}) {
  const [topic, setTopic] = useState("General");
  const [desc, setDesc] = useState("customize your dashboard");

  function onClickImg(index) {
    setImgNum((prev) => index);
    setCoverHide((prev) => !prev);
    setIsimgLoading((prev) => !prev);
    setTimeout(() => setIsimgLoading(true), 500);
    setTimeout(() => setCoverHide(true), 1500);
  }
  function onClickQuotes(index) {
    setQuotesNum((prev) => index);
  }
  function onClickShow(i) {
    if (i === 1 && componentHide.showSearch === true) {
      let change = { showSearch: false };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    } else if (i === 1 && componentHide.showSearch === false) {
      let change = { showSearch: true };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    }

    if (i === 2 && componentHide.showWeather === true) {
      let change = { showWeather: false };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    } else if (i === 2 && componentHide.showWeather === false) {
      let change = { showWeather: true };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    }

    if (i === 3 && componentHide.showClock === true) {
      let change = { showClock: false };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    } else if (i === 3 && componentHide.showClock === false) {
      let change = { showClock: true };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    }

    if (i === 4 && componentHide.showGreeting === true) {
      let change = { showGreeting: false };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    } else if (i === 4 && componentHide.showGreeting === false) {
      let change = { showGreeting: true };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    }

    if (i === 5 && componentHide.showTodo === true) {
      let change = { showTodo: false };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    } else if (i === 5 && componentHide.showTodo === false) {
      let change = { showTodo: true };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    }

    if (i === 6 && componentHide.showQuotes === true) {
      let change = { showQuotes: false };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    } else if (i === 6 && componentHide.showQuotes === false) {
      let change = { showQuotes: true };
      setComponentHide((componentHide) => ({
        ...componentHide,
        ...change,
      }));
    }

    console.log(componentHide.showTodo);
  }
  useEffect(() => {
    if (activedNav === 0) {
      setTopic((prev) => "General");
      setDesc((prev) => "Customize your dashboard");
    }
    if (activedNav === 1) {
      setTopic((prev) => "Todo");
      setDesc((prev) => "Break your goals in to manageable pieces");
    }
    if (activedNav === 2) {
      setTopic((prev) => "Photos");
      setDesc((prev) => "Change background of your dashboard");
    }
    if (activedNav === 3) {
      setTopic((prev) => "Quotes");
      setDesc((prev) => "Change quote of your dashboard");
    }
  }, [activedNav]);

  return (
    <div id="setting-contents-box" className="styled-scroll">
      <div id="setting-contents-header">
        <span id="setting-topic" className="no-shadow">
          {topic}
        </span>
        <span id="setting-desc" className="no-shadow">
          {desc}
        </span>
      </div>
      {activedNav === 0 ? (
        <div id="general-box" className="no-shadow">
          <span id="general-show">Show</span>
          <div id="general-item-list">
            <div className="setting-item">
              <span>Search</span>
              <label className="switch">
                <input type="checkbox" checked={componentHide.showSearch} />
                <span
                  onClick={() => onClickShow(1)}
                  className="slider round"
                ></span>
              </label>
            </div>
            <div className="setting-item">
              <span>Weather</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={componentHide.showWeather}
                ></input>
                <span
                  onClick={() => onClickShow(2)}
                  className="slider round"
                ></span>
              </label>
            </div>
            <div className="setting-item">
              <span>Clock</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={componentHide.showClock}
                ></input>
                <span
                  onClick={() => onClickShow(3)}
                  className="slider round"
                ></span>
              </label>
            </div>
            <div className="setting-item">
              <span>Greeting</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={componentHide.showGreeting}
                ></input>
                <span
                  onClick={() => onClickShow(4)}
                  className="slider round"
                ></span>
              </label>
            </div>
            <div className="setting-item">
              <span>Todo</span>
              <label className="switch">
                <input type="checkbox" checked={componentHide.showTodo}></input>
                <span
                  onClick={() => {
                    onClickShow(5);
                  }}
                  className="slider round"
                ></span>
              </label>
            </div>
            <div className="setting-item">
              <span>Quotes</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={componentHide.showQuotes}
                ></input>
                <span
                  onClick={() => onClickShow(6)}
                  className="slider round"
                ></span>
              </label>
            </div>
          </div>
        </div>
      ) : null}
      {activedNav === 1 ? (
        <div>
          <div className="setting-item no-shadow">
            <span>Clear All</span>
            <button>-</button>
          </div>
        </div>
      ) : null}
      {activedNav === 2 ? (
        <div id="background-img-box">
          {img.map((img, index) => (
            <img
              onClick={() => onClickImg(index)}
              key={index}
              className="background-img-list fadein"
              src={img.urls.thumb}
              alt=""
            ></img>
          ))}
        </div>
      ) : null}
      {activedNav === 3 ? (
        <div id="quotes-box">
          <ul>
            {quotes.map((quotes, index) => (
              <div className="quotes-list">
                <li
                  onClick={() => onClickQuotes(index)}
                  className="quote-line no-shadow"
                >
                  <span>"{quotes.quote}"</span>
                  <span className="author"> -{quotes.author}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SettingContents;
