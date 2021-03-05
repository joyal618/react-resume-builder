import React, { useState } from 'react';
import "./ResumeForm.css";
import { Form, Button } from 'react-bootstrap';
import { updateUserName } from '../../redux';
import { updateUserEmail } from '../../redux';
import { updateUserAddress } from '../../redux';
import { updateUserPhoneNumber } from '../../redux';
import { updateUserEducation } from '../../redux';
import { updateUserExperience } from '../../redux';
import { connect } from 'react-redux';




function ResumeForm(props) {

    const [educationCount, setEducationCount] = useState(1);
    const [experienceCount, setExperienceCount] = useState(1);
    const [customDiv, setCustomDiv] = useState(['div1']);



    return (
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
                    <Form.Label>Educational Qualifications {educationCount}</Form.Label>
                    <Form.Control type="text" placeholder="Enter Institute Name" />
                    <Form.Control type="text" placeholder="Enter Pass Out Year" />
                    <Form.Control type="text" placeholder="Enter Degree" />
                    <button id="add-button" onClick={(e) => {
                        e.preventDefault()
                        setEducationCount(educationCount + 1)
                        console.log(educationCount)
                    }
                    }>Add another degree</button>
                </Form.Group>

                <Form.Group id="multipleInputContainer" controlId="formBasicExperience">

                    <div>
                        <Form.Label>Previous Experience {experienceCount}</Form.Label>
                        <Form.Control type="text" placeholder="Enter Company Name" />
                        <Form.Control type="text" placeholder="Enter Number of Year" />
                        <Form.Control type="text" placeholder="Enter Designation" />
                    </div> 
                    <button id="add-button" onClick={(e) => {
                        e.preventDefault()
                        setExperienceCount(experienceCount + 1)
                        console.log(experienceCount)
                    }
                    }>Add another company</button>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
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
        updateUserEducation: (e) => dispatch(updateUserEducation(e)),
        updateUserExperience: (e) => dispatch(updateUserExperience(e))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumeForm);