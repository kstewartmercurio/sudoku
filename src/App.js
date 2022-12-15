import React, {useState} from "react";

import {BoardPage} from "./components/boardPage/boardPage";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";

function App() {
  const [seventeen, setSeventeen] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const [tornado, setTornado] = useState(false);
  const [swimTest, setSwimTest] = useState(false);

  const infoRef = React.createRef();
  const settingsRef = React.createRef();

  const handleNavbarClick = (clickType) => {
    if (clickType === "info") {
      infoRef.current.scrollIntoView({behavior: "smooth"});
    } else if (clickType === "settings") {
      settingsRef.current.scrollIntoView({behavior: "smooth"});
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
      <BoardPage seventeen={seventeen} blackout={blackout} tornado={tornado}
        swimTest={swimTest} handleNavbarClick={handleNavbarClick}/>
      <div ref={infoRef}>
        <Welcome/>
      </div>
      <div ref={settingsRef}>
        <Settings shareAffixStatus={shareAffixStatus}/>
      </div>
    </div>
  );
}

export default App;
