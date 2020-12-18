import React, {useEffect, useState} from "react";
import "./About.css";
import {Link} from "react-router-dom";
import CopyrightText from "../../header/footer/CopyrightText";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {fadeIn} from 'react-animations';
import {pageVariants, pageTransition, pageStyle} from "../../animation";
import {motion} from "framer-motion";

const About = () => {

    const [name, setName] = useState('prajwal pokhrel.');

    const socialMedias = [
        {name: "facebook", icon: <i className="fab fa-facebook-f"></i>},
        {name: "Instagram", icon: <i className="fab fa-instagram"></i>},
        {name: "Twitter", icon: <i className="fab fa-twitter"></i>},
        {name: "Github", icon: <i className="fab fa-github"></i>},
        {name: "LinkedIn", icon: <i className="fab fa-linkedin"></i>},
    ];

    const nameChangeHandler = () => {
        if (name === 'prajwal pokhrel.') {
            setName('my portfolio projects.');
        } else {
            setName('prajwal pokhrel.');
        }
    }


    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={pageStyle}
            className="container-fluid bodyContent">
            <div className="row">
                {/*Left Arrow*/}
                <div className="col-sm-2 order-2 order-sm-1 d-flex">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <div className="icons__container">
                                <div className="wrapper">
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

                    </div>
                </div>

                <div className="col-sm-8 order-1 order-sm-1 about__main">
                    <div className="row">
                        <div className="col-sm-12 order-2 order-sm-1
                                        about__left d-flex
                                        justify-content-center flex-column">
                            <h3 className="about__hello"><small>Hello. I am,</small></h3>
                            <h4 className="display-3" style={fadeIn}>
                                <strong>
                                    <Link onMouseOver={nameChangeHandler}
                                          onMouseLeave={nameChangeHandler}
                                          className="about__title"
                                          exact
                                          to="/portfolio">
                                        {name}
                                    </Link>
                                </strong>
                            </h4>


                            <p className="lead about__description">
                                I love learning. Every day I push myself to learn something new,
                                whether that be about <span>machine learning</span>, <span>software engineering</span>, or
                                miscellaneous facts about the <span>universe</span>.</p>
                            <p className="lead about__description">
                                I recently graduated from <span>University of Wolverhampton,
                                UK</span> with a Bachelor of Science with Honours in <span>Computer Science</span>.</p>
                            <p className="lead about__description">
                                Lastly, I am a fan of <span>outdoor activities</span>,
                                &nbsp;<span>TV series</span>, and recently <span>cooking</span>.</p>

                        </div>
                        {/*Add this things in portfolio sections*/}
                        {/*<div className="col-sm-1 order-2 order-sm-2*/}
                        {/*                about__right">*/}
                        {/*    /!*<PrajwalAvatar />*!/*/}
                        {/*    /!*<p>Here are a few technologies I love to work:</p>*!/*/}
                        {/*    /!*<ul>*!/*/}
                        {/*    /!*    <li>JavaScript (ES6+)</li>*!/*/}
                        {/*    /!*    <li>React</li>*!/*/}
                        {/*    /!*    <li>HTML & CSS</li>*!/*/}
                        {/*    /!*    <li>Node.js</li>*!/*/}
                        {/*    /!*    <li>MongoDB</li>*!/*/}
                        {/*    /!*    <li>Python</li>*!/*/}
                        {/*    /!*    <li>Django</li>*!/*/}
                        {/*    /!*    <li>Machine Learning</li>*!/*/}
                        {/*    /!*    <li>Node.js</li>*!/*/}
                        {/*    /!*</ul>*!/*/}


                        {/*</div>*/}
                    </div>
                    <div className="row">
                        <div className="col-sm-12 pl-0 mt-3">
                            <button className="about__contactBtn">Get In Touch</button>
                        </div>
                    </div>

                </div>
                {/*Right Arrow*/}
                <div className="col-sm-3 order-3 order-sm-2"></div>
            </div>
            {/*<CopyrightText />*/}
            {/*<Footer />*/}
        </motion.div>
    );
};

export default About;