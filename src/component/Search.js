import { useState } from "react";
import "../css/Search.css";
import searchIcon from "../img/search_icon.png";
function Search({ componentHide }) {
  const [keyword, setKeyword] = useState("");
  let url = `https://www.google.com/search?q=${keyword}`;
  function onSubmit(event) {
    event.preventDefault();
    window.location.href = url;
    // window.location.href = `https://www.google.com/search?q=${this.value}`;
  }

  function onChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div id="search-box">
      <div
        className={
          "fadein" + (componentHide.showSearch === true ? "" : " invisible")
        }
      >
        <form onSubmit={onSubmit}>
          <input
            value={keyword}
            onChange={onChange}
            placeholder="search on google"
            className="search no-outline-input font-shadow30"
          ></input>
        </form>
      </div>
      <img
        onClick={onSubmit}
        id="search-icon"
        className={
          "fadein" + (componentHide.showSearch === false ? " invisible" : "")
        }
        src={searchIcon}
        alt=""
      />
    </div>
  );
}

export default Search;
