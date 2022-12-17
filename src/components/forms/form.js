import React, {useRef} from "react";

export function Form(props) {
    const form = useRef();

    return (
        <div className="form-wrapper">
            <form className="form" ref={form}>
                <div id="close-btn-row">
                    <button id="close-btn">
                        x
                    </button>
                </div>
                <p className="form-header">
                    want to reach out? feel free to contact me using the
                    following form and i'll get back to you as soon as i can.
                </p>
                <label className="form-label">name</label>
                <br/>
                <input className="form-input" type="text" name="user_name" />
                <br/>
                <label className="form-label">email</label>
                <br/>
                <input className="form-input" type="email" name="user_email" />
                <br/>
                <label className="form-label">message</label>
                <br/>
                <textarea className="form-input" name="message" />
                <br/>
                <input id="send-btn" type="submit" value="Send" />
            </form>
        </div>
    );
}