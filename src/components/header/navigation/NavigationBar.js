import React from "react";
import {NavLink} from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand logo" to="/"><h3>
                    <strong>prajwal</strong>
                    <small>pokhrel</small><strong>.</strong>
                </h3></NavLink>
                <button className="navbar-toggler custom__toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    {/*<span className="navbar-toggler-icon"></span>*/}
                    <i className="fas fa-bars"></i>
                    {/*<i className="fa fa-angle-down"></i>*/}
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName="navigation__active" className="nav-link" exact to="/"><span>01.</span>&nbsp;about</NavLink>
                        <NavLink activeClassName="navigation__active" className="nav-link" exact to="/portfolio"><span>02.</span>&nbsp;portfolio</NavLink>
                        <NavLink activeClassName="navigation__active" className="nav-link" exact to="/contact"><span>03.</span>&nbsp;contact</NavLink>
                    </div>
                    <button className="nav__resumeBtn">Resume</button>
                </div>
            </nav>
        </div>

    );
};

export default NavigationBar;