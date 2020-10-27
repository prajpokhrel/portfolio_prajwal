import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    {/*Image sample on card*/}
                    <div className="card__contents">
                        <img src={props.imageSrc} alt="Avatar" className="image" />
                            <div className="overlay">
                                <div className="text">
                                    <h3>{props.title}</h3>
                                    <p>{props.description}</p>
                                </div>
                                <a href={props.demoURL} target="_blank" className="card__button">visit project</a>
                            </div>
                    </div>
                    {/*End image sample*/}
                    <p className="card-text">
                        <span>Python</span>&nbsp;|&nbsp;
                        <span>Python</span>&nbsp;|&nbsp;
                        <span>Python</span>&nbsp;|&nbsp;
                        <span>Python</span>&nbsp;|&nbsp;
                        <span>Python</span>&nbsp;|&nbsp;
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;