import React from "react";
import "./Social.css";
import {NavLink} from "react-router-dom";
import CopyrightText from "../../header/footer/CopyrightText";

const Social = () => {

    const socialMedias = [
        {name: "facebook", icon: <i className="fab fa-facebook-f"></i>},
        {name: "Instagram", icon: <i className="fab fa-instagram"></i>},
        {name: "Twitter", icon: <i className="fab fa-twitter"></i>},
        {name: "Github", icon: <i className="fab fa-github"></i>},
        {name: "LinkedIn", icon: <i className="fab fa-linkedin"></i>},
    ];

    return (
        <div className="container-fluid social">
            <div className="row">
                <div className="col-sm social__content">
                    <h2 className="text-center social__title"><small><strong>Let's Get Social</strong></small></h2>
                    <div className="wrapper d-flex justify-content-center">

                        {socialMedias.map(items => {
                            return (
                                <div className="button">
                                    <div className="icon">
                                        {items.icon}
                                    </div>
                                    {/*<span>{items.name}</span>*/}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col copyright">
                    {/*<h5 className="text-center copyright"><small>Handcrafted by me &copy; twentytwenty</small></h5>*/}
                    <CopyrightText />
                </div>
            </div>
        </div>
    );
};

export default Social;