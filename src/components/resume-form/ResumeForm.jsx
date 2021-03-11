import React, { useState } from 'react';
import "./ResumeForm.css";
import { Form, Button } from 'react-bootstrap';
import { updateUserName } from '../../redux';
import { updateUserEmail } from '../../redux';
import { updateUserAddress } from '../../redux';
import { updateUserPhoneNumber } from '../../redux';
import { updateUserEducation } from '../../redux';
import { updateUserExperience } from '../../redux';
import { addUserEducation } from '../../redux';
import { addUserExperience } from '../../redux';
import { removeUserEducation } from '../../redux';
import { removeUserExperience } from '../../redux';
import { connect } from 'react-redux';
import ResumeTemplate from "../resume-template/ResumeTemplate"
import { InputTags } from 'react-bootstrap-tagsinput'
// import 'react-bootstrap-tagsinput/dist/index.css'

function ResumeForm(props) {

    const [customExperienceDiv, setCustomExperienceDiv] = useState(['div1']);
    const [customEducationDiv, setCustomEducationDiv] = useState(['div1']);
    const [showExperienceRemoveButton, setShowExperienceRemoveButton] = useState(false);
    const [showEducationRemoveButton, setShowEducationRemoveButton] = useState(false);
    const [skillSet, setSkillSet] = useState([]);

    const addNewEducation = () => {
        props.addUserEducation();
        setShowEducationRemoveButton(true);
        let cDivs = [...customEducationDiv, "newDiv"];
        setCustomEducationDiv(cDivs);
    }


    const addNewExperience = () => {
        props.addUserExperience();
        setShowExperienceRemoveButton(true);
        let cDivs = [...customExperienceDiv, "newDiv"];
        setCustomExperienceDiv(cDivs);
    }

    const removeEducation = () => {
        props.removeUserEducation();
        if (customEducationDiv.length !== 1) {
            let cDivs = [...customEducationDiv];
            cDivs.pop();
            setCustomEducationDiv(cDivs)
            if (customEducationDiv.length === 2)
                setShowEducationRemoveButton(false);
        }

    }


    const removeExperience = () => {
        props.removeUserExperience();
        if (customExperienceDiv.length !== 1) {
            let cDivs = [...customExperienceDiv];
            cDivs.pop();
            setCustomExperienceDiv(cDivs)
            if (customExperienceDiv.length === 2)
                setShowExperienceRemoveButton(false);
        }
    }



    return (
        < div className="edit-resume-container">
            <div className="form-container">
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => props.updateUserName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onChange={(e) => props.updateUserEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                     </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Address" onChange={(e) => props.updateUserAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Phone Number" onChange={(e) => props.updateUserPhoneNumber(e.target.value)} />
                    </Form.Group>


                    <Form.Group id="multipleInputContainer" controlId="formBasicEducation">
                        {customEducationDiv.map((cdiv, i) => (
                            <div key={i}>
                                <Form.Label>Educational Qualifications {i + 1}</Form.Label>
                                <Form.Control type="text" placeholder="Enter Institute Name" name="institueName" onChange={(e) => {
                                    props.updateUserEducation(i, e.target.value, e.target.name);
                                }} />
                                <Form.Control type="text" placeholder="Enter Pass Out Year" name="passOutYear" onChange={(e) => {
                                    props.updateUserEducation(i, e.target.value, e.target.name);
                                }} />
                                <Form.Control type="text" placeholder="Enter Degree" name="degree" onChange={(e) => {
                                    props.updateUserEducation(i, e.target.value, e.target.name);
                                }} />
                            </div>
                        ))
                        }

                        {showEducationRemoveButton && (<button id="remove-button" onClick={(e) => {
                            e.preventDefault();
                            removeEducation();
                        }}>Remove</button>)}

                        <button id="add-button" onClick={(e) => {
                            e.preventDefault();
                            addNewEducation();
                        }}>Add another degree</button>

                    </Form.Group>

                    <Form.Group id="multipleInputContainer" controlId="formBasicExperience">
                        {customExperienceDiv.map((cdiv, i) => (
                            <div key={i}>
                                <Form.Label > Previous Experience {i + 1}</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Name" name="companyName" onChange={(e) => {
                                    props.updateUserExperience(i, e.target.value, e.target.name);
                                }} />
                                <Form.Control type="text" placeholder="Enter Number of Year" name="numberOfYears" onChange={(e) => {
                                    props.updateUserExperience(i, e.target.value, e.target.name);
                                }} />
                                <Form.Control type="text" placeholder="Enter Designation" name="designation" onChange={(e) => {
                                    props.updateUserExperience(i, e.target.value, e.target.name);
                                }} />

                            </div>
                        ))
                        }

                        {showExperienceRemoveButton && (<button id="remove-button" onClick={(e) => {
                            e.preventDefault();
                            removeExperience();
                        }
                        }>Remove</button>)}

                        <button id="add-button" onClick={(e) => {
                            e.preventDefault();
                            addNewExperience();
                        }
                        }>Add another company</button>
                    </Form.Group>

                    <Form.Group controlId="formBasicSkillSets">
                        <InputTags placeholder="Enter Your skills" id = "skills-input" values={skillSet} onTags={(skillSet) => setSkillSet(skillSet.values)} onKeyPress={(e) => { 
                            e.key === 'Enter' && e.preventDefault(); 
                        }}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>



            </div >
            <ResumeTemplate details={props} />
        </div >
    )
}

const mapStateToProps = state => {
    return {
        state: state

    }
}

const mapDispatchToProps = dispatch => {

    return {
        updateUserName: (e) => dispatch(updateUserName(e)),
        updateUserEmail: (e) => dispatch(updateUserEmail(e)),
        updateUserAddress: (e) => dispatch(updateUserAddress(e)),
        updateUserPhoneNumber: (e) => dispatch(updateUserPhoneNumber(e)),
        updateUserEducation: (key, name, payload) => dispatch(updateUserEducation(key, payload, name)),
        updateUserExperience: (key, name, payload) => dispatch(updateUserExperience(key, name, payload)),
        addUserExperience: () => dispatch(addUserExperience()),
        addUserEducation: () => dispatch(addUserEducation()),
        removeUserEducation: () => dispatch(removeUserEducation()),
        removeUserExperience: () => dispatch(removeUserExperience()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumeForm);