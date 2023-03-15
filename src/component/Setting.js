import { useState, useEffect } from "react";
import SettingContents from "./SettingContents";
import "../css/Setting.css";
import settingIcon from "../img/setting_icon.png";

function Setting({
  img,
  setImgNum,
  setIsimgLoading,
  setCoverHide,
  quotes,
  quotesNum,
  setQuotesNum,
  componentHide,
  setComponentHide,
  setIsLogin,
}) {
  const [showSetting, setShowSetting] = useState(false);
  const [activedNav, setActivedNav] = useState(0);

  useEffect(() => {
    setActivedNav(0);
  }, [showSetting]);

  return (
    <div>
      {showSetting ? (
        <div id="setting-box" className="fadeup">
          <div id="setting-nav-box">
            <ul>
              <li
                onClick={() => {
                  setActivedNav(0);
                }}
                className={
                  "setting-nav-item" +
                  " no-shadow" +
                  (activedNav === 0 ? " actived" : "")
                }
              >
                General
              </li>
              {/* todo 부분이 딱히 의미가 없을 것 같아서 일단은 주석처리 해둠
              <li
                onClick={() => {
                  setActivedNav(1);
                }}
                className={
                  "setting-nav-item" +
                  " no-shadow" +
                  (activedNav === 1 ? " actived" : "")
                }
              >
                Todo
              </li>
 */}
              <li
                onClick={() => {
                  setActivedNav(2);
                }}
                className={
                  "setting-nav-item" +
                  " no-shadow" +
                  (activedNav === 2 ? " actived" : "")
                }
              >
                Photos
              </li>
              <li
                onClick={() => {
                  setActivedNav(3);
                }}
                className={
                  "setting-nav-item" +
                  " no-shadow" +
                  (activedNav === 3 ? " actived" : "")
                }
              >
                Quotes
              </li>
            </ul>
            <button
              onClick={() => {
                setIsLogin(false);
              }}
              id="name-change-btn"
            >
              change your name
            </button>
          </div>
          <SettingContents
            img={img}
            activedNav={activedNav}
            setImgNum={setImgNum}
            setIsimgLoading={setIsimgLoading}
            setCoverHide={setCoverHide}
            quotes={quotes}
            quotesNum={quotesNum}
            setQuotesNum={setQuotesNum}
            componentHide={componentHide}
            setComponentHide={setComponentHide}
          />
        </div>
      ) : null}

      <img
        src={settingIcon}
        onClick={() => setShowSetting((prev) => !prev)}
        alt=" "
        id="setting-icon"
      />
    </div>
  );
}

export default Setting;
