import React, {useEffect} from "react";
import "./ProjectList.css";
import {Link} from "react-router-dom";
import ListCard from "./ListCard";

const ProjectList = () => {

    return (
        <div className="container-fluid main__container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="project__list">Other Works</h1>
                    <p className="project__archive">
                        <Link className="lead project__arcLink" exact to="/archive">
                            <small>view the archive</small>
                        </Link>
                    </p>

                    <ListCard />
                </div>
            </div>
        </div>
    );

};

export default ProjectList;