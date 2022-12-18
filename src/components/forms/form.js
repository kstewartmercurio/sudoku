import React, {useRef} from "react";

{/* <form className="form" ref={form}>
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
    <input className="form-input" type="text" name="user_name" />
    <label className="form-label">email</label>
    <input className="form-input" type="email" name="user_email" />
    <label className="form-label">message</label>
    <textarea className="form-input" name="message" />
    <input id="send-btn" type="submit" value="Send" />
</form> */}

export function Form(props) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    }

    const getActivePTag = () => {
        switch (props.p) {
            case "contact":
                return (
                    <p className="form-p">
                        want to get in touch? feel free to contact me using the form below and i'll get back to you as soon as i can.
                    </p>
                )
            case "bug report":
                return (
                    <p className="form-p">
                        found a bug? please be as descriptive as possible so i can replicate the issue and do my best to fix what's wrong.
                    </p>
                )
        }
    }

    return (
        <div className="form-wrapper">
            <form  className="form" ref={form} onSubmit={sendEmail}>
                <div className="form-btn-wrapper">
                    <button className="form-btn" onClick={(e) => {
                        props.shareFormClick("close");
                    }}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
                <div className="form-p-wrapper">
                    {getActivePTag()}
                </div>
                <div className="form-label-wrapper">
                    <label className="form-label" htmlFor="fname">name </label>
                </div>
                <input type="text" id="fname" name="firstname" placeholder="your name.."/>

                <div className="form-label-wrapper">
                    <label className="form-label" htmlFor="lname">email</label>
                </div>
                <input type="email" id="lname" name="lastname" placeholder="your email.."/>

                <div className="form-label-wrapper">
                    <label className="form-label" htmlFor="message">message</label>
                </div>
                <textarea name="message" placeholder="your message..."/>
            
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}