import React from "react";
import "./Footer.css";

const CopyrightText = () => {
    return (
        <p className="text-center copyright__text">Designed and Built with&nbsp;
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill"
                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            &nbsp;by Prajwal Pokhrel</p>
        // <h5 className="text-center copyright__text"><small>Handcrafted by me &copy; twentytwenty</small></h5>
    );
};

export default CopyrightText;