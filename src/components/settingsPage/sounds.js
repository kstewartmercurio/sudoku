import React, {useState} from "react";

import useSound from "use-sound";
import clickSfx from "../../static/sound/frontend_static_sound_click1_click1_1.mp3";
import creamSfx from "../../static/sound/frontend_static_sound_click4_click4_1.mp3";
import typewriterSfx from "../../static/sound/frontend_static_sound_click5_click5_1.mp3";

export function Sounds(props) {
    const [open, setOpen] = useState(true);

    const [playClick] = useSound(clickSfx);
    const [playCream] = useSound(creamSfx);
    const [playTypewriter] = useSound(typewriterSfx);
 
    const handleClick = (newActiveSound) => {
        props.shareActiveSound(newActiveSound);
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const getSoundsDropdownTags = () => {
        if (open === true) {
            let offId = "off";
            let clickId = "click";
            let creamId = "cream";
            let typewriterId = "typewriter";

            switch (props.activeSound) {
                case "off":
                    offId = "selected-sound";
                    break;
                case "click":
                    clickId = "selected-sound";
                    break;
                case "nkcream":
                    creamId = "selected-sound";
                    break;
                case "typewriter":
                    typewriterId = "selected-sound";
                    break;
                default:
                    break;
            }

            return (
                <div id="sound-set">
                    <button className="sound-btn" id={offId} onClick={(e) => {
                        handleClick("off");
                    }}>
                        off
                    </button>
                    <button className="sound-btn" id={clickId} onClick={(e) => {
                        playClick();
                        handleClick("click");
                    }}>
                        click
                    </button>
                    <button className="sound-btn" id={creamId} onClick={(e) => {
                        playCream();
                        handleClick("nkcream");
                    }}>
                        nkcream
                    </button>
                    <button className="sound-btn" id={typewriterId} onClick={(e) => {
                        playTypewriter();
                        handleClick("typewriter");
                    }}>
                        typewriter
                    </button>
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <>
            <div className="dd-wrapper" id="sounds-dd-wrapper">
                <button className="settings-dd" onClick={handleOpen}>
                    sounds
                </button>
            </div>
            {getSoundsDropdownTags()}
        </>
    )
}