import React from "react";
import "./ArchiveList.css";

const ArchiveList = () => {
    return (
        <div className="container-fluid archive__listContainer">
            <div className="row">
                <div className="col-sm">
                    <table className="table archive__table">
                        <thead>
                        <tr className="table__title">
                            <td><strong>Year</strong></td>
                            <td><strong>Project</strong></td>
                            <td><strong>Built at</strong></td>
                            <td><strong>Built with</strong></td>
                            <td><strong>Demo</strong></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="table__year">2019</td>
                            <td className="table__projectTitle"><strong>Sorting Visualizer</strong></td>
                            <td className="table__description">Upstatement</td>
                            <td className="table__description">React Node.js Python Socket.io JavaScript HTML CSS</td>
                            <td className="table__description">
                                <a href="#" className="archive__links"><i className="fab fa-github"></i></a>
                                <a href="#" className="archive__links"><i className="fas fa-external-link-alt"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td className="table__year">2020</td>
                            <td className="table__projectTitle"><strong>Integrating Algolia Search with WordPress Multisite</strong></td>
                            <td className="table__description">Upstatement</td>
                            <td className="table__description">React Node.js Python Socket.io JavaScript HTML CSS</td>
                            <td className="table__description">
                                <a href="#" className="archive__links"><i className="fab fa-github"></i></a>
                                <a href="#" className="archive__links"><i className="fas fa-external-link-alt"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td className="table__year">2020</td>
                            <td className="table__projectTitle"><strong>Sorting Visualizer</strong></td>
                            <td className="table__description">Upstatement</td>
                            <td className="table__description">React Node.js Python Socket.io JavaScript HTML CSS</td>
                            <td className="table__description">
                                <a href="#" className="archive__links"><i className="fab fa-github"></i></a>
                                <a href="#" className="archive__links"><i className="fas fa-external-link-alt"></i></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ArchiveList;