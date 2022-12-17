import React, {useState} from "react";

import {Navbar} from "./components/boardPage/navbar";
import {BottomBar} from "./components/boardPage/bottomBar";
import {Board} from "./components/boardPage/board";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";
import {Contact} from "./components/forms/contact";
import {BugReport} from "./components/forms/bugReport";

function App(props) {
  const [activePage, setActivePage] = useState("board");
  const [activeForm, setActiveForm] = useState(null);

  const getActivePageTag = () => {
    switch (activePage) {
      case "board":
        return (
          <>
            <Board seventeen={props.seventeen} blackout={props.blackout} 
              tornado={props.tornado} swimTest={props.swimTest}
              activeSound={props.activeSound} />
            <BottomBar shareFormClick={shareFormClick}/>
          </>
        )
          
      case "info":
        return <Welcome/>
      case "settings":
        return <Settings shareAffixStatus={props.shareAffixStatus}
          seventeen={props.seventeen} blackout={props.blackout} 
          tornado={props.tornado} swimTest={props.swimTest}
          activeSound={props.activeSound} 
          shareActiveSound={props.shareActiveSound}
        />
      default:
        return null;
    }
  }

  const getActiveFormTag = () => {
    switch (activeForm) {
      case "contact":
        return <Contact/>
      case "bug report":
        return <BugReport/>
      default:
        return null;
    }


  }

  const shareNavbarClick = (clickType) => {
    switch (clickType) {
      case "board":
        setActivePage("board");
        break;
      case "info":
        setActivePage("info");
        break;
      case "settings":
        setActivePage("settings");
        break;
      default:
        break;
    }
  }

  const shareFormClick = (clickType) => {
    var r = document.querySelector(":root");
    r.style.setProperty("--blurValue", "blur(2px)");

    switch (clickType) {
      case "contact":
        setActiveForm("contact");
        break;
      case "bug report":
        setActiveForm("bug report");
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Navbar activePage={activePage} shareNavbarClick={shareNavbarClick}/>
      {getActivePageTag()}
      {getActiveFormTag()}
    </div>
  );
}

export default App;
