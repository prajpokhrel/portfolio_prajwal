import React from "react";
import "./Contact.css";
import Social from "./Social";
import Form from "./Form";

const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/*Left Arrow*/}
                <div className="col-sm-2"></div>

                <div className="col-sm-8 contact__content">
                    <h1 className="contact__heading">get in touch</h1>

                    {/*Manage email sending later and designing part too*/}
                    <p className="lead">If you wanna get in touch, talk to me about a
                        project or just say hi, don't hesitate to contact me
                        using the awesome form below or send an email to <strong>
                            <a className="contact__email" href="mailto: [prajwal.pokhrel18@gmail.com]?subject= &body= ">
                                prajwal.pokhrel18@gmail.com </a>
                        </strong>
                         and ~let's talk.</p>

                    {/* Add form part here. */}
                    <Form />
                    {/* maybe creating a new component would work. */}
                    {/* Social Media part */}

                    <Social />



                </div>

                {/*Right Arrow*/}
                <div className="col-sm-2"></div>
            </div>
        </div>
    );
};

export default Contact;