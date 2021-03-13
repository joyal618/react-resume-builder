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
import { addUserSkills } from '../../redux';
import { connect } from 'react-redux';
import ResumeTemplate from "../resume-template/ResumeTemplate";
import { InputTags } from 'react-bootstrap-tagsinput'
// import 'react-bootstrap-tagsinput/dist/index.css'



function ResumeForm(props) {

    const [customExperienceDiv, setCustomExperienceDiv] = useState(['div1']);
    const [customEducationDiv, setCustomEducationDiv] = useState(['div1']);
    const [showExperienceRemoveButton, setShowExperienceRemoveButton] = useState(false);
    const [showEducationRemoveButton, setShowEducationRemoveButton] = useState(false);
    const [state, setState] = useState ([]);
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
        console.log(customExperienceDiv)
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
    
    function handleOnTag(value){
        console.log(value);
        setState(value.values);
        props.addUserSkills(value.values[value.values.length-1]);
    }

    return (
        < div className="edit-resume-container">
            <div className="form-container">
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.updateUserName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.updateUserEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                     </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Address" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.updateUserAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Phone Number" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.updateUserPhoneNumber(e.target.value)} />
                    </Form.Group>


                    <Form.Group id="multipleInputContainer" controlId="formBasicEducation">
                        {customEducationDiv.map((cdiv, i) => (
                            <div key={i}>
                                <Form.Label>Educational Qualifications {i + 1}</Form.Label>
                                <Form.Control type="text" placeholder="Enter Institute Name" name="institueName" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                    props.updateUserEducation(i, e.target.value, e.target.name);
                                }} />
                                <Form.Control type="text" placeholder="Enter Pass Out Year" name="passOutYear" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                    props.updateUserEducation(i, e.target.value, e.target.name);
                                }} />
                                <Form.Control type="text" placeholder="Enter Degree" name="degree" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                    props.updateUserEducation(i, e.target.value, e.target.name);
                                }} />
                            </div>
                        ))
                        }

                        {showEducationRemoveButton && (<button id="remove-button"
                            onKeyPress={(e) => { e.key === 'Enter' && console.log("edu rem") }}
                            onClick={(e) => {
                                e.preventDefault();
                                removeEducation();
                            }
                            }>Remove</button>)}

                        <button id="add-button"

                            onClick={(e) => {
                                e.preventDefault();
                                addNewEducation();
                            }
                            }>Add another degree</button>

                    </Form.Group>

                    <Form.Group id="multipleInputContainer" controlId="formBasicExperience">
                        {customExperienceDiv.map((cdiv, i) => (
                            <div key={i}>
                                <Form.Label > Previous Experience {i + 1}</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Name" name="companyName" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                    props.updateUserExperience(i, e.target.value, e.target.name);
                                }} />
                                <Form.Control type="text" placeholder="Enter Number of Year" name="numberOfYears" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                    props.updateUserExperience(i, e.target.value, e.target.name);
                                }} />
                                <Form.Control type="text" placeholder="Enter Designation" name="designation" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                    props.updateUserExperience(i, e.target.value, e.target.name);
                                }} />

                            </div>
                        ))
                        }

                        {showExperienceRemoveButton && (<button id="remove-button"
                            onClick={(e) => {
                                e.preventDefault();
                                removeExperience();
                            }
                            }
                        >Remove</button>)}

                        <button id="add-button"
                            onClick={(e) => {
                                e.preventDefault();
                                addNewExperience();
                            }
                            }>Add another company</button>
                    </Form.Group>

                    <Form.Group id="skills-input-group" controlId="formBasicSkillSets">
                        {console.log(props.state.userSkills)}
                        <InputTags placeholder="Add Skills" values={state} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onTags={(value) => handleOnTag(value)} />
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
        updateUserEducation: (key, payload, name) => dispatch(updateUserEducation(key, payload, name)),
        updateUserExperience: (key, payload, name) => dispatch(updateUserExperience(key, payload, name)),
        addUserExperience: () => dispatch(addUserExperience()),
        addUserEducation: () => dispatch(addUserEducation()),
        addUserSkills: (e) => dispatch(addUserSkills(e)),
        removeUserEducation: () => dispatch(removeUserEducation()),
        removeUserExperience: () => dispatch(removeUserExperience()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumeForm);