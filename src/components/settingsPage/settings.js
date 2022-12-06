import React, {useState} from "react";
import {Affixes} from "./affixes";
import {Themes} from "./themes";

export function Settings() {
    const [activeSetting, setActiveSetting] = useState("affixes");

    const renderActiveSetting = () => {
        switch (activeSetting) {
            case "affixes":
                return <Affixes/>
            case "theme":
                return <Themes/>
            default:
                break;
        }
    }

    return (
        <>
            <div className="section" id="settings-page">
                <div id="settings-nav-column">
                    <button className="settings-nav-btn" id="affix-selector"
                        onClick={(e) => {
                            setActiveSetting("affixes")
                    }}>
                        affix
                    </button>
                    <button className="settings-nav-btn" id="theme-selector"
                        onClick={() => {
                            setActiveSetting("theme");
                    }}>
                        theme
                    </button>
                </div>
                <div id="settings-content">
                    {renderActiveSetting()}
                </div>
            </div>
        </>
    )
}