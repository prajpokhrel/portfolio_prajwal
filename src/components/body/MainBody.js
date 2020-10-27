import React from "react";
import "./MainBody.css";
import Header from "../header/Header";
import About from "./BodyContent/About";
import { Route, Switch, Redirect } from "react-router-dom";
import Portfolio from "./BodyContent/Portfolio";
import Contact from "./BodyContent/Contact";

const MainBody = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/portfolio" exact component={Portfolio}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/" exact component={About}/>
                <Redirect to="/" />
            </Switch>


        </div>
    );
};

export default MainBody;