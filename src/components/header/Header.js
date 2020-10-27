import React from "react";
import "./Header.css";
import NavigationBar from "./navigation/NavigationBar";

const Header = () => {
    return (
        <div className="container-fluid header">
            <div className="row">
                {/*Top left*/}
                <div className="col-sm-2"></div>

                <div className="col-sm-8" style={{paddingRight:0, paddingLeft:0}}>
                    <NavigationBar />
                </div>

                {/*Top right*/}
                <div className="col-sm-2"></div>
            </div>
        </div>
    );
};

export default Header;