import React, {useState} from "react";

import {BoardPage} from "./components/boardPage/boardPage";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";

function App() {
  const [seventeen, setSeventeen] = useState(false);
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

  const shareSeventeenStatus = (status) => {
    setSeventeen(status);
  }

  const shareBlackoutStatus = (status) => {
    setBlackout(status);
  }

  return (
    <div className="App">
      <BoardPage seventeen={seventeen} blackout={blackout} 
        handleNavbarClick={handleNavbarClick}/>
      <div ref={infoRef}>
        <Welcome/>
      </div>
      <div ref={settingsRef}>
        <Settings shareSeventeenStatus={shareSeventeenStatus} 
          shareBlackoutStatus={shareBlackoutStatus}/>
      </div>
    </div>
  );
}

export default App;
