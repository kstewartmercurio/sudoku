import React, {useState} from "react";

import {Navbar} from "./components/boardPage/navbar";
import {BoardPage} from "./components/boardPage/boardPage";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";

function App() {
  const [activePage, setActivePage] = useState("board");

  const [seventeen, setSeventeen] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const [tornado, setTornado] = useState(false);
  const [swimTest, setSwimTest] = useState(false);

  const getActivePageTag = () => {
    switch (activePage) {
      case "board":
        return <BoardPage activePage={activePage} seventeen={seventeen} 
          blackout={blackout} tornado={tornado} swimTest={swimTest}/>
      case "info":
        return <Welcome/>
      case "settings":
        return <Settings shareAffixStatus={shareAffixStatus}/>
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

  const shareAffixStatus = (affix, status) => {
    switch (affix) {
      case "17 clue":
        setSeventeen(status);
        break;
      case "blackout":
        setBlackout(status);
        break;
      case "tornado":
        setTornado(status);
        break;
      case "swim test":
        setSwimTest(status);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Navbar activePage={activePage} shareNavbarClick={shareNavbarClick}/>
      {getActivePageTag()}
    </div>
  );
}

export default App;
