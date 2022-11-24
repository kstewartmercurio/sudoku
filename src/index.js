import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "./styling/boardPage/topBtnBar.css";
import "./styling/boardPage/board.css";
import "./styling/boardPage/numBtnBar.css";
import "./styling/welcome.css";
import "./styling/settings.css";

import {Board} from "./modules/boardPage/board";
// import {Welcome} from "./modules/welcome";
import {Settings} from "./modules/settingsPage/settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Board/>
    {/* <Welcome/> */}
    <Settings/>
  </>
);