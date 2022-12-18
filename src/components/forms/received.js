import React from "react";

export function Received(props) {
    const getActivePTag = () => {
        switch (props.p) {
            case "contact":
                return (
                    <p id="received-p-contact">your message has been received. thanks for taking the time to reach out!</p>
                );
            case "bug report":
                return (
                    <p id="received-p-bug-report">your message has been received. thanks for taking the time to improve the game. your feedback is greatly appreciated!</p>
                );
            default:
                return null;
        }
    }

    return (
        <div id="received-wrapper">
            <div id="received">
                <div id="received-btn-wrapper">
                    <button id="received-btn" onClick={(e) => {
                        props.shareFormClick("close");
                    }}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
                {getActivePTag()}
            </div>
        </div>
    )
}