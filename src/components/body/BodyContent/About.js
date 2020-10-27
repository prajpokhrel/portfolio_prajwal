import React, {useState} from "react";
import "./About.css";
import Footer from "../../header/footer/Footer";
import {Link} from "react-router-dom";
import PrajwalAvatar from "./PrajwalAvatar";

const About = () => {

    const [name, setName] = useState('prajwal pokhrel.');

    const nameChangeHandler = () => {
        if (name === 'prajwal pokhrel.') {
            setName('my portfolio projects.');
        } else {
            setName('prajwal pokhrel.');
        }
    }

    return (
        <div className="container-fluid bodyContent">
            <div className="row">
                {/*Left Arrow*/}
                <div className="col-sm-2"></div>

                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-8 order-2 order-sm-1
                                        about__left d-flex
                                        justify-content-center flex-column">
                            <h3><small>Hello. I am,</small></h3>
                            <h4 className="display-4">
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


                            <p className="lead">I love learning. Every day I push myself to learn something new,
                                whether that be about <span>machine learning</span>, <span>software engineering</span>, or
                                miscellaneous facts about the <span>universe</span>.</p>
                            <p className="lead">I recently graduated from <span>University of Wolverhampton,
                                UK</span> with a Bachelor of Science with Honours in <span>Computer Science</span>.</p>
                            <p className="lead">Lastly, I am a fan of <span>outdoor activities</span>,
                                <span>TV series</span>, and recently <span>cooking</span>.</p>



                        </div>
                        <div className="col-sm-4 order-1 order-sm-2
                                        about__right d-flex
                                        justify-content-start">

                            <PrajwalAvatar />

                        </div>
                    </div>

                </div>
                {/*Right Arrow*/}
                <div className="col-sm-1"></div>
            </div>
            <Footer />
        </div>
    );
};

export default About;