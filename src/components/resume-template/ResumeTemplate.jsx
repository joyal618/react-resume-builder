import React from 'react'
import "./ResumeTemplate.css";
import { connect } from 'react-redux';



function ResumeTemplate(details) {

    return (
        <div className='resume-template-main-container'>
            <h1>{details.state.userName}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(
    mapStateToProps
)(ResumeTemplate);