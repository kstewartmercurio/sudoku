import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

export function Form(props) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oymwvco', 'template_f4tnezm', form.current, 'xuNn2NKsvRoT6hZIp')
        .then((result) => {
            // console.log(result.text);
            return null;
        }, (error) => {
            console.log(error.text);
        });
        props.shareFormClick("submit");
    }

    const getActivePTag = () => {
        switch (props.p) {
            case "contact":
                return (
                    <p className="form-p">
                        want to get in touch? feel free to contact me using the form below and i'll get back to you as soon as i can.
                    </p>
                );
            case "bug report":
                return (
                    <p className="form-p">
                        found a bug? please be as descriptive as possible so i can replicate the issue and do my best to fix what's wrong.
                    </p>
                );
            default:
                return null;
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
                    <label className="form-label" htmlFor="name">name </label>
                </div>
                <input type="text" id="fname" name="name" placeholder="your name.." required/>

                <div className="form-label-wrapper">
                    <label className="form-label" htmlFor="email">email</label>
                </div>
                <input type="email" id="lname" name="email" placeholder="your email.." required/>

                <div className="form-label-wrapper">
                    <label className="form-label" htmlFor="message">message</label>
                </div>
                <textarea name="message" placeholder="your message..." required/>
            
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}