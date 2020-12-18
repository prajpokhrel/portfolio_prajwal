import React from "react";
import "./MainBody.css";
import Header from "../header/Header";
import About from "./BodyContent/About";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Portfolio from "./BodyContent/Portfolio";
import Contact from "./BodyContent/Contact";
import Archive from "./BodyContent/Archive";
import { AnimatePresence } from "framer-motion";

const MainBody = () => {
    const location = useLocation();
    return (
        <div style={{position: "relative"}}>
            <Header />
            {/*Wrapping with AnimatePresence*/}
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route path="/archive" exact component={Archive} />
                        <Route path="/portfolio" exact component={Portfolio}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/" exact component={About}/>
                        <Redirect to="/" />
                    </Switch>
                </AnimatePresence>
        </div>
    );
};

export default MainBody;