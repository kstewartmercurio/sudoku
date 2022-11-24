import React from "react";

export function Settings() {
    // const [activeSetting, setActiveSetting] = useState("theme");
    const activeSetting = "theme";

    const renderThemes = () => {
        return (
            <div id="theme-set">
                <button className="theme-btn" id="fleuriste">
                    fleuriste
                </button>
                <button className="theme-btn" id="fledgling">
                    fledgling
                </button>
                <button className="theme-btn" id="passionfruit">
                    passionfruit
                </button>
                <button className="theme-btn" id="hedge">
                    hedge
                </button>
            </div>
        )
    }

    const renderActiveSetting = () => {
        switch (activeSetting) {
            case "theme":
                return renderThemes();
            default:
                break;
        }
    }

    return (
        <>
            <div className="section" id="settings-page">
                <div id="settings-nav-column">
                    <button className="settings-nav-btn" id="theme-selector">
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