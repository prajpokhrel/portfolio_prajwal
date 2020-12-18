import React from "react";
import './Portfolio.css';
import Card from "./Card";
import Footer from "../../header/footer/Footer";
import portfolios from "./data/otherProjects";
import ProjectList from "./ProjectList";
import {motion} from "framer-motion";
import {pageVariants, pageTransition, pageStyle} from "../../animation";

const Portfolio = () => {

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

                <div className="col-sm-10 portfolio__content">
                    <h1 className="portfolio__header">Things i've Built</h1>
                    {/*<h1 className="portfolio__header">my portfolio projects</h1>*/}
                    <p className="lead portfolio__description">From Machine Learning to React.JS, Redux, and Node.JS,
                        Check out my latest software development portfolio projects.</p>

                    {/* Add a project filters */}

                    {/*<small>Showing all projects. Use the filter to list them by skill or technology.</small>*/}

                    {/* Cards */}
                    <Card />
                    {/*{portfolios.map((data, index) => {*/}
                    {/*    return (*/}

                    {/*        <Card imageSrc={data.imageSrc}*/}
                    {/*              title={data.title}*/}
                    {/*              description={data.description}*/}
                    {/*              key={index}*/}
                    {/*              demoURL={data.demoUrl}/>*/}

                    {/*    );*/}
                    {/*})}*/}

                    <ProjectList />

                    {/* Footer */}
                    <Footer />


                </div>

                {/*Right Arrow*/}
                <div className="col-sm-1"></div>
            </div>
        </motion.div>
    );
};

export default Portfolio;