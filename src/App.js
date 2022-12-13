import React, {useState} from "react";

import {BoardPage} from "./components/boardPage/boardPage";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";

function App() {
  const [blackout, setBlackout] = useState(false);

  const infoRef = React.createRef();
  const settingsRef = React.createRef();

  const handleNavbarClick = (clickType) => {
    if (clickType === "info") {
      infoRef.current.scrollIntoView({behavior: "smooth"});
    } else if (clickType === "settings") {
      settingsRef.current.scrollIntoView({behavior: "smooth"});
    }
  }

  const shareBlackoutStatus = (bool) => {
    setBlackout(bool);
  }

  return (
    <div className="App">
      <BoardPage blackout={blackout} handleNavbarClick={handleNavbarClick}/>
      <div ref={infoRef}>
        <Welcome/>
      </div>
      <div ref={settingsRef}>
        <Settings shareBlackoutStatus={shareBlackoutStatus}/>
      </div>
    </div>
  );
}

export default App;
