import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {Board} from "./modules/board";
import {Welcome} from "./modules/welcome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Board/>
    <Welcome/>
  </>
);