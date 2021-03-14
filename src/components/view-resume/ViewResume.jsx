import React from 'react';
import "./ViewResume.css"
import NavBar from "../../components/nav-bar/NavBar";
import ResumeTemplate from "../../components/resume-template/ResumeTemplate";


function ViewResume(props) {
    return (
        <div className="view-resume-container">
            <NavBar id="view-resume" />
            <div className="resume-template-container">
                <ResumeTemplate details={props} id="view"/>
            </div>

        </div>
    );
}

export default ViewResume;