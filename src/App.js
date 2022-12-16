import React, {useState} from "react";

import {Navbar} from "./components/boardPage/navbar";
import {BottomBar} from "./components/boardPage/bottomBar";
import {Board} from "./components/boardPage/board";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";

function App(props) {
  const [activePage, setActivePage] = useState("board");

  const getActivePageTag = () => {
    switch (activePage) {
      case "board":
        return <Board seventeen={props.seventeen} blackout={props.blackout} 
          tornado={props.tornado} swimTest={props.swimTest}
          activeSound={props.activeSound} />
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

  return (
    <div className="App">
      <Navbar activePage={activePage} shareNavbarClick={shareNavbarClick}/>
      {getActivePageTag()}
      <BottomBar/>
    </div>
  );
}

export default App;
