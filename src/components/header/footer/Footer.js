import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import CopyrightText from "./CopyrightText";

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col text-center footer__content">
                    <h2 className="footer__title"><small><strong>Let's connect</strong></small></h2>
                    <p>Wanna get in touch or talk about a project?</p>
                    <p>
                        Feel free to contact me via email at <strong>
                            <a className="footer__contact" href="mailto: [prajwal.pokhrel18@gmail.com]?subject= &body= ">prajwal.pokhrel18@gmail.com </a></strong>
                    </p>
                    <p>
                        or drop a line in the form at the <strong><Link className="footer__contact" exact to="/contact"> contact page.</Link></strong>
                    </p><br/>
                    <CopyrightText />

                </div>

            </div>
        </div>
        );
};

export default Footer;