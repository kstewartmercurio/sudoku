import React from "react";

import {BoardPage} from "./components/boardPage/boardPage";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";

function App() {
  const infoRef = React.createRef();
  const settingsRef = React.createRef();

  const handleNavbarClick = (clickType) => {
    if (clickType === "info") {
      infoRef.current.scrollIntoView({behavior: "smooth"});
    } else if (clickType === "settings") {
      settingsRef.current.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div className="App">
      <BoardPage handleNavbarClick={handleNavbarClick}/>
      <div ref={infoRef}>
        <Welcome/>
      </div>
      <div ref={settingsRef}>
        <Settings/>
      </div>
    </div>
  );
}

export default App;
