import React from "react";
import './Portfolio.css';
import Card from "./Card";
import Footer from "../../header/footer/Footer";
import portfolios from "../../../components/body/BodyContent/data/portfolioData";

const Portfolio = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/*Left Arrow*/}
                <div className="col-sm-2"></div>

                <div className="col-sm-8 portfolio__content">
                    <h1 className="portfolio__header">my recent projects</h1>
                    <p className="lead">From Machine Learning to React.JS, Redux, and Node.JS,
                        Check out my latest software development portfolio projects.</p>

                    {/* Add a project filters */}

                    <small>Showing all projects. Use the filter to list them by skill or technology.</small>

                    {/* Cards */}
                    <div className="container-fluid card__container">
                        <div className="row">
                            {portfolios.map((data, index) => {
                                return (

                                    <Card imageSrc={data.imageSrc}
                                          title={data.title}
                                          description={data.description}
                                          key={index}
                                          demoURL={data.demoUrl}/>

                                );
                            })}
                        </div>
                    </div>

                    {/* Footer */}
                    <Footer />


                </div>

                {/*Right Arrow*/}
                <div className="col-sm-2"></div>
            </div>
        </div>
    );
};

export default Portfolio;