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
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName="navigation__active" className="nav-link" exact to="/">about</NavLink>
                        <NavLink activeClassName="navigation__active" className="nav-link" exact to="/portfolio">portfolio</NavLink>
                        {/*<Link activeClassName="navigation__active" className="nav-link" to="/education">education</Link>*/}
                        <NavLink activeClassName="navigation__active" className="nav-link" exact to="/contact">contact</NavLink>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavigationBar;