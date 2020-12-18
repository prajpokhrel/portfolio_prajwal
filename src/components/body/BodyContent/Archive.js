import React from "react";
import "./Archive.css";
import ArchiveList from "./ArchiveList";
import {motion} from "framer-motion";
import {pageVariants, pageTransition, pageStyle} from "../../animation";

const Archive = () => {
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
                <div className="col-sm-1"></div>
                <div className="col-sm-10 archive__container">
                    <h1 className="display-3 archive__header"><strong>Archive</strong></h1>
                    <h3 className="archive__description"><small>List of things that I've worked on</small></h3>


                    <ArchiveList />


                </div>
                <div className="col-sm-1"></div>
            </div>
        </motion.div>
    );
};

export default Archive;