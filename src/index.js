import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "./styling/boardPage/boardPage.css";
import "./styling/boardPage/navbar.css";
import "./styling/boardPage/topBtnBar.css";
import "./styling/boardPage/board.css";
import "./styling/boardPage/numBtnBar.css";
import "./styling/welcome.css";
import "./styling/settings.css";

import {BoardPage} from "./components/boardPage/boardPage";
import {Welcome} from "./components/welcomePage/welcome";
import {Settings} from "./components/settingsPage/settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BoardPage/>
    <Welcome/>
    <Settings/>
  </>
);