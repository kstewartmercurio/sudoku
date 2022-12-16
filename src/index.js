import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "./styling/boardPage/navbar.css";
import "./styling/boardPage/topBtnBar.css";
import "./styling/boardPage/board.css";
import "./styling/boardPage/numBtnBar.css";
import "./styling/welcome.css";
import "./styling/settings/settings.css";
import "./styling/settings/affixContent.css";
import "./styling/settings/themeContent.css";

function Index() {
  const [seventeen, setSeventeen] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const [tornado, setTornado] = useState(false);
  const [swimTest, setSwimTest] = useState(false);

  const shareAffixStatus = (affix, status) => {
    switch (affix) {
      case "17 clue":
        setSeventeen(!seventeen);
        break;
      case "blackout":
        setBlackout(!blackout);
        break;
      case "tornado":
        setTornado(!tornado);
        break;
      case "swim test":
        setSwimTest(!swimTest);
        break;
      default:
        break;
    }
  }

  return (
    <App shareAffixStatus={shareAffixStatus}
      seventeen={seventeen} blackout={blackout} tornado={tornado} 
      swimTest={swimTest}
    />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);