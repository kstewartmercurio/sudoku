import React, {useState} from "react";

import useSound from "use-sound";
import clickSfx from "../../sounds/frontend_static_sound_click1_click1_1.mp3";

export function Sounds(props) {
    const [open, setOpen] = useState(true);

    const [playClick] = useSound(clickSfx);

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

            switch (props.activeSound) {
                case "off":
                    offId = "selected-sound";
                    break;
                case "click":
                    clickId = "selected-sound";
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