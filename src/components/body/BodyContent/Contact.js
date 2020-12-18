import React from "react";
import "./Contact.css";
import Social from "./Social";
import Form from "./Form";
import {motion} from "framer-motion";
import {pageVariants, pageTransition, pageStyle} from "../../animation";

const Contact = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={pageStyle}
            className="container-fluid">
            <div className="row">
                {/*Left Arrow*/}
                <div className="col-sm-1"></div>

                <div className="col-sm-10 contact__content">
                    <h1 className="contact__heading">Get in Touch</h1>

                    {/*Manage email sending later and designing part too*/}
                    <p className="lead contact__description">If you wanna get in touch, talk to me about a
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
                <div className="col-sm-1"></div>
            </div>
        </motion.div>
    );
};

export default Contact;