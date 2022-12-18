import React, {useState} from "react";

import {Navbar} from "./components/boardPage/navbar";
import {BottomBar} from "./components/boardPage/bottomBar";
import {Board} from "./components/boardPage/board";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";
import {Form} from "./components/forms/form";
import {Received} from "./components/forms/received";

function App(props) {
  const [activePage, setActivePage] = useState("board");
  const [activeForm, setActiveForm] = useState(null);
  const [inactiveForm, setInactiveForm] = useState(null);

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
          storedTheme={props.storedTheme} 
          shareStoredTheme={props.shareStoredTheme} tornado={props.tornado} 
          swimTest={props.swimTest} activeSound={props.activeSound} 
          shareActiveSound={props.shareActiveSound}
        />
      default:
        return null;
    }
  }

  const getActiveFormTag = () => {
    switch (activeForm) {
      case "contact":
        return <Form p={"contact"} shareFormClick={shareFormClick}/>
      case "bug report":
        return <Form p={"bug report"} shareFormClick={shareFormClick}/>
      case "received":
        return <Received p={inactiveForm} shareFormClick={shareFormClick}/>
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
    switch (clickType) {
      case "contact":
        r.style.setProperty("--blurValue", "blur(2px)");
        setActiveForm("contact");
        setInactiveForm("contact");
        break;
      case "bug report":
        r.style.setProperty("--blurValue", "blur(2px)");
        setActiveForm("bug report");
        setInactiveForm("bug report")
        break;
      case "close":
        r.style.setProperty("--blurValue", "blur(0px)");
        setActiveForm(null);
        setInactiveForm(null);
        break;
      case "submit":
        setActiveForm("received");
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
