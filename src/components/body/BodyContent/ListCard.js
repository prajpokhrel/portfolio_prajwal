import React, {useEffect} from "react";
import "./ListCard.css";
import Aos from "aos";

const ListCard = () => {

    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <div className="row">
            <div data-aos="fade-up" className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <a href="#" className="listproject__github"><i className="fas fa-external-link-alt"></i></a>
                            {/*<button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>*/}
                        </div>
                        <div className="listcard__title">
                            <h3><strong>Diabetic Retinopathy Detection</strong></h3>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                            build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <a href="#" className="listproject__github"><i className="fas fa-external-link-alt"></i></a>
                            {/*<button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>*/}
                        </div>
                        <div className="listcard__title">
                            <h3><strong>Extraction of Blood Vessels</strong></h3>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <a href="#" className="listproject__github"><i className="fas fa-external-link-alt"></i></a>
                            {/*<button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>*/}
                        </div>
                        <div className="listcard__title">
                            <h3><strong>Sorting Algorithms Visualizers</strong></h3>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>
                        </div>
                        <div className="listcard__title">
                            <h3><strong>Creative Chat</strong></h3>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>
                        </div>
                        <div className="listcard__title">
                            <h3><strong>Soduku Solver</strong></h3>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>


            <div data-aos="fade-up" className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>
                        </div>
                        <div className="listcard__title">
                            <h3><strong>Diabetic Retinopathy</strong></h3>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ListCard;